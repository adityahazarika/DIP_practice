import { Container } from "inversify";
import { TYPES } from "./types";
import {userInterface} from "./interfaces/userInterface";
import { UserService } from "./services/userService";
import { UserController } from "./controller/userController";

const myContainer = new Container({autoBindInjectable:true}); //autoBindInjectable will auto bind the @injectable() decorated classes, so we do not nned to write line number 9 manually
myContainer.bind<userInterface>(TYPES.UserInterface).to(UserService)
// myContainer.bind<UserController>(UserController).toSelf()
export { myContainer };