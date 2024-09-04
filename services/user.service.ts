import { UserType } from "../types/user.type";

function getDummyUser() : UserType {
    return {
        id: 1,
        name: 'John Doe',
        email: 'some'
    };
}

export { getDummyUser };