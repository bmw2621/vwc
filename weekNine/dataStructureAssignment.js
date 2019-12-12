class mySet {
    constructor(data=[]){
        this._data = data
    }
    add(obj){
        if (!this._data.includes(obj)){
            this._data.push(obj)
        }
    }
    remove(obj) {
        let idx = this._data.indexOf(obj)
        this._data.splice(idx, 1)
    }
    print() {
        console.log(this._data)
    }

}

class myStack {
    constructor(data=[]){
        this._data = data
    }
    push(obj){
        this._data.push(obj)
    }
    pop() {
        if(!(this.isEmpty())){
            let last = this._data[this._data.length - 1]
            this._data.splice(this._data.length - 1, 1)
            return last
        } else {
            return null
        }
    }
    isEmpty(){return this._data.length === 0}
    print() {
        console.log(this._data)
    }
}

class myQueue {
    constructor(data=[]){
        this._data = data
    }
    push(obj){
        this._data.push(obj)
    }
    pop() {
        if(!(this.isEmpty())){
            let first = this._data[0]
            this._data.splice(0, 1)
            return first
        } else {
            return null
        }
    }
    isEmpty(){return this._data.length === 0}
    print() {
        console.log(this._data)
    }
}

class myMap {
    constructor(data=[[],[]]){
        this._keys = data[0]
        this._values = data[1]
    }
    add(key, value){
        if(!this._keys.includes(key)){
            this._keys.push(key)
            this._values.push(value)
        } else {
            let idx = this._keys.indexOf(key)
            this._values[idx] = value
        }
    }
    get(key){
        return this._values[this._keys.indexOf(key)]
    }
    drop(key){
        let idx = this._keys.indexOf(key)
        this._keys.splice(idx, 1)
        this._values.splice(idx, 1)
    }
    print(){
        let response = []
        for(let i = 0; i < this._keys.length; i++){
            response.push([this._keys[i], this._values[i]])
        }
        console.log(response)
    }

}
console.log("Testing mySet\n----------")
var aSet = new mySet()
console.log("Add four items to set and print")
aSet.add(1)
aSet.add(2)
aSet.add(3)
aSet.add(4)

aSet.print()

console.log("Attempt to add two items still in set and print")
aSet.add(2)
aSet.add(3)

aSet.print()

console.log("Remove value 3 from set and print")
aSet.remove(3)

aSet.print()

console.log("\n\n")
console.log("Testing myStack\n----------")
var aStack = new myStack()
console.log("Add four items to stack and print")
aStack.push(1)
aStack.push(2)
aStack.push(3)
aStack.push(4)

aStack.print()

console.log("Pop two items off stack and print")
console.log(aStack.pop())
console.log(aStack.pop())

aStack.print()

console.log("Check if empty, pop off last two items and check again")
console.log(aStack.isEmpty())
console.log(aStack.pop())
console.log(aStack.pop())
console.log(aStack.isEmpty())

console.log("\n\n")
console.log("Testing myQueue\n----------")
var aQueue = new myQueue()
console.log("Add four items to queue and print")
aQueue.push(1)
aQueue.push(2)
aQueue.push(3)
aQueue.push(4)

aQueue.print()

console.log("Pop two items off queue and print")
console.log(aQueue.pop())
console.log(aQueue.pop())

aQueue.print()

console.log("Check if empty, pop off last two items and check again")
console.log(aQueue.isEmpty())
console.log(aQueue.pop())
console.log(aQueue.pop())
console.log(aQueue.isEmpty())

console.log("\n\n")
console.log("Testing myQueue\n----------")
var aMap = new myMap()
console.log("Add five key:value paires to map and print")
aMap.add("Army", "Army")
aMap.add("Navy", "Navy")
aMap.add("Air Force", "Air Force")
aMap.add("Marines", "Navy")
aMap.add("Coast Guard", "Navy")

aMap.print()

console.log("Remove pairs from the map and print")
aMap.drop("Army")
aMap.drop("Air Force")

aMap.print()

console.log("Get a value using a key\n// console.log\(aMap.get\('Marines'\)\)")
console.log(aMap.get("Marines"))

console.log("Add key value pair where key already exists\naMap.add\('Coast Guard','Navy'\)")
aMap.add("Coast Guard", "Coast Guard")
aMap.print()

