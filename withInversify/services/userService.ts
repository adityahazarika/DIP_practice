import { userArr } from "../data";
import {userInterface} from "../interfaces/userInterface";
import { injectable, inject } from "inversify";

@injectable()
export class UserService implements userInterface{
    
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