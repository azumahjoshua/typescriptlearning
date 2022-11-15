interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponename:string,value:number):string
}

// reopening of the interface
interface User {
    gitHubToken?: string
}

//inheritance
interface Admin extends User {
    role :"admin"| "ta"| "student"
}

const azumah: User = {dbId: 234,email:"someone@gmail.com",userId:22231,startTrail() {
    return "trail started"
},getCoupon(couponename:"promotion") {
    return "12"
    }, gitHubToken: "github"
}

const azadmin: Admin = {
    dbId: 234, email: "someone@gmail.com", userId: 22231, startTrail() {
        return "trail started"
    }, getCoupon(couponename: "promotion") {
          return "12"
  }, gitHubToken: "github", role : "ta"
}