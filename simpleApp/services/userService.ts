import { userArr } from "../data";

export class UserService {

    // constructor()
    async getUserService() {
        return userArr;
    }

    async createUserService(data) {
        try {
            let exist = 0;
            for (let elem of userArr) {
                if (elem.id == data.id) {
                    exist = 1;
                    throw "User already exist";
                }
            }
            userArr.push(data)
            return "User created"
        }
        catch(err){
            throw "err "+err
        }
    }
}