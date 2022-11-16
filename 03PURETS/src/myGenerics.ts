// const score: Array<number> = []
// const myname: Array<string> = []


// function identityOne(val: boolean | number): boolean | number{
//     return val
// }

// function identityThree<Type>(val: Type): Type {
//     return val
// }

// identityThree<number>(1)

// interface Bootle{
//     brand: string,
//     type: number
// }
// function displayNames<T>(names: T[]) {
    
// }
// displayNames<string>(["ama","kofi"])
// // identityThree<Bootle>()

// class Person {
    // firstName: string;
    // lastName: string;
// 
    // constructor(firstName: string, lastName: string) {
        // this.firstName = firstName
        // this.lastName = lastName
    // }
// }
// function display<T extends Person>(per: T):void {
    // console.log(`${ per.firstName} ${per.lastName}`)
// }
// 
// let per = new Person("Bill", "Gates")
// display(per)


// interface keyPair<T, U>{
    // key: T;
    // value: U;
// }
// 
// // let k1: keyPair<number, string> = { key: 1, value: "Steve" }
// 
// let k2: keyPair<number, number> = {
    // key:10,value:20
// }

//Generic Class
// class KeyValuePair<T, U>{
    // private key: T;
    // private val: U;
    // constructor(key:T,val:U) {
        // this.val = val,
        // this.key =key
    // }
    // setKeyValue(key: T, val: U): void{
        // this.key = key,
        // this.val = val
    // }
    // display():void {
        // // console.log(`Key = ${this.key}, val = ${this.val}`);
    // }
// }
// 
// let kvp1 = new KeyValuePair<number, string>(1, "Azumah")

// interface IKeyValueProcessor<T, U>{
    //  process(key: T, val: U): void;
// }
// 
// // class kvProcessor<T, U> implements IKeyValueProcessor<T, U>{
    // process(key: T, val: U): void {
        // console.log(`Key = ${key}, val = ${val}`);
    // }
// }
// 
// // let proc: IKeyValueProcessor<number, string> = new kvProcessor();
// proc.process(1, 'Bill')

// function getSearchProduct<T>(products: T[]): T {
    // const myIndex = 3
    // return products[2]
// }
// 
// const getMostSerchedProduct = <T>(products:T[]):T => {
    // const index = 4
    // return products[index]
// }
// 
// interface Database{
    // connection: string,
    // username: string,
    // password:string
// }
// // function anotherFunction<T, U extends Database>(valOne:T,valTwo:U):object {
    // return {
        // valOne,
        // valTwo
    // }
// }


