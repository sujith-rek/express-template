import { getDummyUser } from "../services/user.service";
import { Request, Response } from 'express';

const getSomeUser = async (req : Request, res : Response) => {
    const user = getDummyUser();
    res.json(user);
}

export { getSomeUser };