"use strict";

const request = require("request-promise");

const mongoose = require("mongoose");
const User = mongoose.model("users");
const atob = require("atob");
const trainGroup = require("../utils/trainPersonGroup");

module.exports = app => {
  // this adds new users
  app.post("/api/face/new", async (req, res) => {
    const dataUri = req.body.input;
    const user = await User.findById(req.body.id); // unintialized
    // if(user.personId !== 'uninitialized'){
    //   console.log(' your picture already exists');
    //   return;
    // }
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
    const subscriptionKey = "sub key here";
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
    trainGroup();
    res.send(user);
  });

  // this identifies if user exists
  app.post("/api/face/identify", async (req, res) => {
    //get req.body.input
    // get image, call faceDetect with image
    // return faceID
    // call faceIdentify with the ID
    // return the personID, and confidence
    // DATABASE **
    const dataUri = req.body.input;
    //const user = await User.findById(req.body.id);
    var data = dataUri.split(",")[1];
    var mimeType = dataUri.split(";")[0].slice(5);
    var bytes = atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var byteArr = new Uint8Array(buf);
    let testId;

    for (var i = 0; i < bytes.length; i++) {
      byteArr[i] = bytes.charCodeAt(i);
    }
    const subscriptionKey = "sub key here";
    //first doing detect face to get faceID to compare with database
    const params = {
      returnFaceId: "true",
      returnFaceLandmarks: "false"
    };
    const options = {
      uri: "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect",
      qs: params,
      body: byteArr,
      headers: {
        "Content-Type": "application/octet-stream",
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    };

    let foundFace = true;

    await request.post(options, (error, response, body) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
      console.log("Out: ", JSON.parse(body));
      const faceData = JSON.parse(body);
      if (!faceData.length) {
        foundFace = false;
        return;
      }
      testId = JSON.parse(body)[0].faceId;
      console.log("face Id from detect >>>> 2\n");
      console.log(jsonResponse);
      console.log(" KKK " + testId);
    });
    // terminate if no face was found.
    if (!foundFace) {
      console.log("Could not find a face.");
      return;
    }

    // now using faceId (testID) returned by detect to run identify
    let candidateID;
    let confidenceLevel;
    const options2 = {
      uri:
        "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/identify",
      body: `{
        "personGroupId" : "bike2go",
        "faceIds" : ["${testId}"],
        "maxNumOfCandidatesReturned" : "1",
        "confidenceThreshold": "0.5"
      }`,
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    };

    let foundMatch = true;

    await request.post(options2, (error, response, body) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
      console.log(jsonResponse); // gets up to here
      const output = JSON.parse(body);
      if (output[0].candidates.length === 0) {
        foundMatch = false;
        return;
      }
      candidateID = JSON.parse(body)[0].candidates[0].personId;
      confidenceLevel = JSON.parse(body)[0].candidates[0].confidence;
      console.log("response from indentify <<< 3\n");
      console.log(jsonResponse);
      console.log(
        " candidate 1 is " +
          candidateID +
          " with a confidence level of " +
          confidenceLevel
      );
    });

    if (!foundMatch) {
      console.log("No match was found.");
      return;
    }

    const user = await User.findOne({ personId: candidateID });
    if (user === null) {
      console.log(" Error, user doest exist ");
    }
    console.log(user);
    await res.send(user);
    console.log("<< end of everything >>");
  });
};
