import { UserController } from "./controllers/userController";
import { UserService } from "../simpleApp/services/userService";
import process from 'process';

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  });

const userController = new UserController(new UserService());

console.log("\n\nOptimized with DIP\n\n");
userController.createUser({ id: 2, name: "Shivani", age: 22 }).then((data) => {
    console.log(data)
}).catch((err)=>{
    console.log("Error -"+err+"")
})

userController.getUser().then((data) => {
    console.log(data)
});