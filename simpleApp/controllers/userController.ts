import { UserService } from "../services/userService"

let userservice = new UserService()
export class UserController {
    async getUser() {
        let users = await userservice.getUserService();
        return users;
    }

    async createUser(data) {
        return await userservice.createUserService(data);
    }
}