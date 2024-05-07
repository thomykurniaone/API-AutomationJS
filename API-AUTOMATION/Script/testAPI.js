const { userData, TEST_DATA } = require("../Data/userData");
const request = require("supertest")("https://kasir-api.belajarqa.com");


describe("Authorization - Login", function () {
    it("Success login ", async function () {
        const response = await request
            .post("/authentications")
            .send({
                email: TEST_DATA.email,
                password: TEST_DATA.password
            });
        
        
            console.log((await response).status)
            console.log((await response).body.status)
            console.log((await response).body.message)
            console.log((await response).body)
            console.log('accessToken: ' +(await response).body.data.accessToken)
    })
});