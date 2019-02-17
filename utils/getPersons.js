const request = require("request-promise");
const func1 = async ()=> {
    const subscriptionKey = "b9db8d7c659246ab9425e9f84a590021";
    const params = {
        personGroupId: "bike2go",
    };
    const list = await request({
       method: 'get',
       uri: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/bike2go/persons',
       qs: params,
       headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    });
    console.log(list);
}
func1();