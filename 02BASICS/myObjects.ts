// const User = {
    // name: "Azumah",
    // email: "someone@exemple.com",
    // isPaid : true
// }
// type Employees = {
    // name: string,
    // isPaid: boolean
// }
// 
// function createUser(employe: Employees) :Employees{
    // return employe
// }
// createUser(User)

type User = {
    readonly _id:string,
    name: string,
    email: string,
    isActive: boolean,
}
let myUser: User = {
    _id: "1234",
    name: "Azumah",
    email: "someone@gmail.com",
    isActive: false
}
type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate:string
}
type cardDetains = cardNumber & cardDate & {
    
}
//makee changes 
myUser.email = "johnsomeone@gmail.com"
myUser._id 

export { }