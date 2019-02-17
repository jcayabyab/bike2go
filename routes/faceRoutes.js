"use strict";

const request = require("request-promise");

const mongoose = require("mongoose");
const User = mongoose.model("users");
const atob = require("atob");

module.exports = app => {
  app.post("/api/face/new", async (req, res) => {
    const dataUri = req.body.input;
    const user = await User.findById(req.body.id);
    var data = dataUri.split(",")[1];
    var mimeType = dataUri.split(";")[0].slice(5);
    var bytes = atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var byteArr = new Uint8Array(buf);

    for (var i = 0; i < bytes.length; i++) {
      byteArr[i] = bytes.charCodeAt(i);
    }
    // base64 string for the image
    // get a user based on ID from front end
    const imageUrl =
      "https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/52638768_561950294307804_3120951123943358464_n.jpg?_nc_cat=103&_nc_ht=scontent-sea1-1.xx&oh=a2855a5d84ca22b767283c9ce3b4a773&oe=5CDAFBBD";
    const subscriptionKey = "b9db8d7c659246ab9425e9f84a590021";
    let idNum;
    //first to get a person ID
    const params = {
      personGroupId: "bike2go"
    };
    {
      // await request({
      //   method: 'PUT',
      //   uri: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/bike2go',
      //   qs: params,
      //   body: '{"name" : "bike2go"}',
      //   headers: {
      // 	'Content-Type': 'application/json',
      // 	'Ocp-Apim-Subscription-Key': subscriptionKey
      //   }
      // });
    }
    const options = {
      uri:
        "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/bike2go/persons",
      qs: params,
      body: '{"name" : "' + user.firstName + user._id + '"}',
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    };
    await request.post(options, async (error, response, body) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      let returnVal = JSON.stringify(JSON.parse(body), null, "  ");
      console.log("PersonID Response\n");
      console.log(" XXX " + returnVal);
      idNum = JSON.parse(body).personId;
    });
    const params2 = {
      personGroupId: "bike2go",
      personId: idNum
    };
    const options2 = {
      uri:
        "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/bike2go/persons/" +
        idNum +
        "/persistedFaces",
      qs: params2,
      body: byteArr,
      headers: {
        "Content-Type": "application/octet-stream",
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    };
    await request.post(options2, (error, response, body) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      let returnVal = JSON.stringify(JSON.parse(body), null, "  ");
      console.log("Add face\n");
      console.log(" QQQ " + returnVal);
    });


    user.personId = idNum;
    await user.save();
    // make a new Person inside of the API server
    // upload the face to the Person -> look at return value?
    // DATABASE **

    user.personId = idNum;
    await user.save();
    console.log("Obtained");
    // assign personID to User object
    res.send(" HUlllooooo ");
  });

  app.post("/api/face/identify", (req, res) => {
    // get image, call faceDetect with image
    // return faceID
    // call faceIdentify with the ID
    // return the personID, and confidence
    // DATABASE **
    const personId = "This is where the personId will be";
    const user = User.findOne({ personId: personId });
    res.send(user);
    // Interact with model to get User object
    // send the User
    // if nothing was found, then send an error message
  });
};
