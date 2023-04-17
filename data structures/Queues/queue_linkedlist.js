class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        const node = new Node(value);
        if(this.length === 0){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        ++this.length;
        return this;
   }

   dequeue(){
    if(!this.first){
        return null;
    }
    if(this.first === this.last){
        this.last = null;
    }
    const current = this.first;
    this.first = this.first.next;
    --this.length;
    return console.log('\ndequeued:', current.value);
   }

   peek(){
    return console.log('\nFirst to come out:',this.first.value,'\n');
   }
   
   print(){
    return console.log(this);
   }

}

const myQueue = new Queue();
myQueue.enqueue('Paras')
myQueue.print();

myQueue.enqueue('Deepti')
myQueue.print();

myQueue.enqueue('Deepak')
myQueue.print();

myQueue.peek();

myQueue.dequeue();
myQueue.print();

myQueue.dequeue();
myQueue.print();

myQueue.dequeue();
myQueue.print();