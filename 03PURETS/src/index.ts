class User {
    protected _courseCount = 1
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
    private deleteToken() {
        console.log("Token Deleted")
    }
    get getEmail():string {
        return this.email
    }
    get get_courseCount(): number{
        return this._courseCount
    }
    set set_courseCount(courseNumber:number){
        this._courseCount = courseNumber
    }
}

class SubUser extends User{
    isFamily: boolean = true

    changeCourseCount() {
        super._courseCount =2
    }
}
const azumah = new User('someone@gmail.com', 'azumah')
azumah.city = "Obuasi"