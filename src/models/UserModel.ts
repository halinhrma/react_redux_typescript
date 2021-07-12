export interface UserType {
    id: number,
    userName: string,
    firstName?: string,
    lastName?: string
}

export class UserModel implements UserType {
    id: number;
    userName: string;
    firstName?: string;
    lastName?: string;
    constructor(id: number, userName: string, firstName?: string, lastName?: string) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}