class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    isEmpty(){
        return this.length === 0;
    }

    getSize(){
        return this.length;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = this.head;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues = listValues + `${curr.value}` + '-->';
                curr = curr.next
            }
            listValues += null;
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size',list.getSize());
list.prepend(10);
list.prepend(5);
list.prepend(1);
console.log(list);
list.print();