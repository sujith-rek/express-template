import { UserType } from "../types/user.type";
import prisma from "../prisma/prisma.client";

function getDummyUser() : UserType {
    return {
        id: '1',
        email: 'somemail@gmail.com',
        name: 'John Doe',
        password: 'password',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
}

const createUser = async (user: UserType): Promise<any> => {
    return prisma.user.create({
        data: user
    });
};

export { getDummyUser, createUser };