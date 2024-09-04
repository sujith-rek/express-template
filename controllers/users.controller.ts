import { getDummyUser, createUser } from "../services/user.service";
import { Request, Response } from 'express';

const getSomeUser = async (req : Request, res : Response) => {
    const user = getDummyUser();
    res.json(user);
}

const createSomeUser = async (req : Request, res : Response) => {
    const dummyUser = {
        id: '1',
        email: 'somemail@gmail.com',
        name: 'John Doe',
        password: 'password',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    const user = await createUser(dummyUser);
    res.json(user);
}

export { getSomeUser, createSomeUser };