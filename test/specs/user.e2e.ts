import { createUser, getUser, deleteUser } from "../utils/apiCommands.js";

describe ("API commands", ()=>{
    let userId: number;
    let userEmail: string;

    afterAll (async () => {
        await deleteUser (userId);
    });


    it ("Post command", async () => {
        const user = {
            id: 12,
            name: "test",
            username: "userTest",
            email: "test@test.com",
            address: {
                street: "test",
                suite: "suite 123",
                city: "test fe",
                zipcode: 1234,
                geo: {
                    lat: "12 34 56",
                    lng: "12 45 23"
                }
            },
            phone: "123456789",
            website: `https://jsonplaceholder.typicode.com/users/12`,
            company: {
                name: "test co.",
                catchPhrase: "catch phrase",
                bs: "test tests"
            }
        };
        await createUser(user);
    });

    it ("Get command", async () => {
        userId=9;
        const userData = await getUser(userId);
        userEmail = userData.email;

        console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- User email:", await userEmail);
    });
});


