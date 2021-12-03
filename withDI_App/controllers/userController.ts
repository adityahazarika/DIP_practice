import { userInterface } from "../interface/userInterface";

export class UserController {
    constructor(private userService:userInterface){}
    async getUser() {
        let users = await this.userService.getUserService();
        return users;
    }

    async createUser(data:any) {
        return await this.userService.createUserService(data)
    }
}