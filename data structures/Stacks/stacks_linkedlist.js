class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const node = new Node(value);

        if(this.length === 0){
            this.top = node;
            this.bottom = node;
        }else{
            const current = this.top;
            this.top = node;
            this.top.next = current;
        }
        ++this.length;
        return this;
    }

    pop(){
        if(!this.top){
            return null;
        }else{
            if(this.top === this.bottom){
                this.bottom = null;
            }
            const current = this.top;
            this.top = this.top.next;
            --this.length;
            console.log('popped:', current.value);
        }
        return this;
    }

    print(){
        return console.log(this);
    }
}

console.clear();
const myStack = new Stack();

myStack.pop();
myStack.print();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.print();

myStack.pop();
myStack.print();

myStack.pop();
myStack.print();

myStack.pop();
myStack.print();
