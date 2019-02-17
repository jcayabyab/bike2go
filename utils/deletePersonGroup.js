const request = require("request-promise");

const subscriptionKey = "b9db8d7c659246ab9425e9f84a590021";
const params = {
    personGroupId: "bike2go",
};
{       // ignore
// const options = {
//     uri:
//       "https://[location].api.cognitive.microsoft.com/face/v1.0/persongroups/bike2go",
//     qs: params,
//     headers: {
//       "Ocp-Apim-Subscription-Key": subscriptionKey
//     }
// };
}
request({
   method: 'delete',
   uri: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/bike2go',
   qs: params,
   headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey
    }
});

console.log(' <<bike2go has been deleted >> ')