class Stack{
    constructor(){
        this.array = [];
    }

    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }

    peek(){
        return this.array[this.array.length -1];
    }

    print(){
        return console.log(this);
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.print();

myStack.push('udemy');
myStack.print();

myStack.push('discord');
myStack.print();

let top = myStack.peek();
console.log(top);

myStack.pop();
myStack.print();
