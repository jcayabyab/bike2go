const func = async ()=> {



const request = require("request-promise");

const subscriptionKey = "b9db8d7c659246ab9425e9f84a590021";
const params = {
    personGroupId: "bike2go",
};
const list = await request({
   method: 'get',
   uri: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups',
   headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey
    }
});
//let response = JSON.stringify(JSON.parse(list), null, '  ');
console.log(list);

}
func();