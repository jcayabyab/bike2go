const request = require("request-promise");
const trainGroup = () =>{
    const subscriptionKey = "b9db8d7c659246ab9425e9f84a590021";
    const params3 = {
        personGroupId: "bike2go",
    }
    const options3 = {
        uri:
        "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/bike2go/train",
        qs: params3,
        headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey
        }
    };
    request.post(options3, (error, response, body) => {
        if (error) {
        console.log("Error: ", error);
        return;
        }
        console.log(' <<bike2go has been trained >> ')
    });
}

module.exports = trainGroup;
