interface IUser {
    email:string,
    password:string
    profile:{
        firstName:string,
        lastName:string,
        phone?:string,
        birthDate?:Date,
    }
}
export{IUser}