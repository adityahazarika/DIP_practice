export interface userInterface{
    getUserService():Promise<Object>,
    createUserService(arg:Object):Promise<String>
}