import "reflect-metadata";
import { myContainer } from "./inversify.config";
import {UserController} from "./controller/userController"

let usercontroller = myContainer.get<UserController>(UserController);

usercontroller.getUser().then((data)=>{
    console.log(data)
}); 

usercontroller.createUser({ id: 2, name: "Kunal", age: 22 }).then((data) => {
    console.log("data",data)
}).catch((err)=>{
    console.log("Error -"+err+"")
})