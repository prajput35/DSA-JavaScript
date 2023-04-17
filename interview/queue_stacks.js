class Queue{
    constructor(){
        this.first = [];
        this.last = [];
    }

    enqueue(value){
        const len = this.first.length;
        for( let i = 0; i < len; ++i){
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue(){
        const len = this.last.length;
        for(let i = 0 ; i < len ;++i){
            this.first.push(this.last.pop())
        }
        const popped = this.first.pop();
        console.log('Popped:',popped,'\n');
        return this;
    }

    peek(){
        if(this.last.length>0){
            return console.log(this.last[0]);
        }
        return console.log(this.first[this.first.length-1]);
    }
    print(){
        return console.log(this);
    }
}

const queue =  new Queue();
queue.enqueue(1);
queue.print();
queue.peek();

queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();
queue.peek();

queue.dequeue();
queue.print();

queue.dequeue();
queue.print();

queue.enqueue(5);
queue.print();