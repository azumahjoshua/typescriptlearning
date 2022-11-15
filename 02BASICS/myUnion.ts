let score: number | string = 33

type User = {
    name: string;
    id:number
}

type Admin = {
    name: string;
    id:number
}

let ama: User | Admin = { name: "Azumah", id: 3444 }

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    } else {

    }
}

//array

const data: number[] = [1, 2, 3, 4, 5, 6]
const date2: string[] = ["A", "B", "C"]
const date4: (string | number)[] = ["A", "B", 3]

let setAllotment: "aisle" | "middle" | "window"

