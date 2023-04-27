/*import { User } from "../entities/user";

export class UserRepository {
    private user: User[] = [];
    private counter: number = 0;

    create(user: User) {
        if (this.isExist(user.phoneNumber)) {
            throw new Error(`phone number already registered`);
        }
        user.id

    }
    isExist(phoneNumber: string) {
        throw new Error("Method not implemented.");
    }
}*/
import { User } from "../entities/user";

export class UserRepository {
    private list: User[] = [];

    create(user: User) {
        if (this.isExist(user.getPhoneNumber())) throw new Error("User already exists");

        this.list.push(user);
    }
    getById(userId: number): User {
        for (const user of this.list) {
            if (user.getId() === userId) return user;
        }
        throw new Error(` ${userId} not found`);
    }

    getPhoneNumber(userNumber: string): User {
        for (const user of this.list) {
            if (user.getPhoneNumber() === userNumber) return user;
        }
        throw new Error(` ${userNumber} not found`);
    }




    isExist(phoneNuber: string): boolean {
        for (const user of this.list) {
            if (user.phoneNumber === phoneNuber) return true;
        }
        return false;
    }
    getList(): User[] {
        return this.list;
    }
}
