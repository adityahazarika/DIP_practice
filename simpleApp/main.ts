import { UserController } from "./controllers/userController";
import process from 'process';

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  });

const userController = new UserController();

userController.createUser({ id: 1, name: "Shivani", age: 22 }).then((data) => {
    console.log(data)
}).catch((err)=>{
    console.log("Error -"+err+"")
})

userController.getUser().then((data) => {
    console.log(data)
});