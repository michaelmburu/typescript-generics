// Generics

const firstnames = ['Max', 'Manuel']
// Or Generic Version
const lastnames: any[] = []
// Or Generic Version
const surnames: Array<string> = []


//Promises
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done')
    }, 2000)
})

promise.then(data => {
    data.split('')
})

// Create a Generic Function
// Merges two objects and returns one object
// Constraints using keyword: extends 
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({name: "Max"}, {age: 30})
console.log(mergedObj.age)


interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] { //Return
    let descriptionText = "Got no value"
    if(element.length > 0) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element + element.length + ' elements.'
    }

    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there'))

// keyOf Keyword
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

extractAndConvert({name: "Michael"}, 'name')

//GENERIC CLASSES
class DataStorage<T extends number | string | boolean> { // Generic Types
    private data: T[] = []

    mixItem(item: number | string | boolean) { // Union Types

    }
    addItem(item: T) { 
        this.data.push(item)
    }

    //Doesn't work on type objects = {}
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Mike")
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();
numberStorage.addItem(3)
console.log(numberStorage.getItems())

// const objStorage = new DataStorage<object>(); // removeItems doesn't work on object
// objStorage.addItem({name: "Naomi"})
// objStorage.addItem({name: "Tracy"})
// console.log(objStorage.getItems())
// objStorage.removeItem({name: "Naomi"})
// console.log(objStorage.getItems())

// PARTIAL UTILITY TYPE
// Turns interface properties as optional
interface CourseGoal {
    title: string
    description: string
    completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {} // turns all interface CourseGoal properties as optional
    courseGoal.title = title
    courseGoal.description = description;
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal // Fixed by type casting
}

// READONLY UTILITY TYPE
// Makes properties readonly and cannot be modified
const usernames: Readonly<string[]> = ['Mike', 'Naomi']
