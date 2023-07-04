import axios from "axios";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
        lat: string;
        lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export async function createUser(user:User): Promise<void>{
    await axios.post(`https://jsonplaceholder.typicode.com/users`, user)
}

export async function getUser(userId:number): Promise<User>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}

export async function deleteUser(userId:number): Promise<void>{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
}