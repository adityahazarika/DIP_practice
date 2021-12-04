import { injectable, inject } from "inversify";
import { userInterface } from "../interfaces/userInterface";
import { TYPES } from "../types";

@injectable()
export class UserController {
    constructor(@inject(TYPES.UserInterface) private userService:userInterface){}
    async getUser() {
        let users = await this.userService.getUserService();
        return users;
    }
    
    async createUser(data:any) {
        return await this.userService.createUserService({ id: 3, name: "Nimesh", age: 22 })
    }
}