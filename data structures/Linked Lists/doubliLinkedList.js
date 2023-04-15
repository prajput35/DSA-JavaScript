class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
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
            this.tail = node;
            this.head.prev = null;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;                                                                                                                                                                                                                                                                                                                                      
    }
    
    append (value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.head.prev = null;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    insert(index, value){

        const node = new Node(value);
        if(this.isEmpty()){
            console.log('bad index, list is empty');
            return;
        }else if(index === 0){
            this.prepend(value);
            return;
        }else if(index > this.length){
            console.log('bad index.');
            return;
        }else if(index === this.length){
            this.append(value);
            return;
        }else{
            let prev = this.head;
            for (let i = 0; i < index - 1; ++i){
                prev = prev.next;
            }
            const temp = prev.next;
            node.next = prev.next;
            node.prev = prev;
            prev.next = node;
            temp.prev = node;
        }
        this.length++;
        return this;
        // you can use console.log(this) or console.log(list.insert());
    }

    remove(index){
        if(this.isEmpty() || index >= this.length){
            console.log('Bad index:',index);
            return this;
        }else if(index === 0){
            const value = this.head.value;
            this.head = this.head.next;
            this.head.prev = null;
            --this.length;
            console.log('removed:', value);
            console.log(this)
            return this.print();
        }else if(index === this.length-1){
            let prev = this.head;
            for(let i = 0; i < index -1; ++i){
                prev = prev.next;
            }
            const value = this.tail.value;
            this.tail = prev;
            this.tail.next = null;
            --this.length;
            console.log('removed:', value);
            console.log(this)
            return this.print();
        }else{
            let prev = this.head;
            for(let i = 0; i < index -1; ++i){
                prev = prev.next;
            }
            
            let temp = prev.next;
            let follower = temp.next;
            const value = temp.value;
            prev.next = temp.next;
            follower.prev = prev;
            --this.length;
            console.log('removing:', value);
            console.log(this)
            return this.print();
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            console.log('value does not exist.');
            return;
        }

        //remove head value
        if(this.head.value === value){
            this.head = this.head.next;
            this.head.prev = null;
            --this.length;
            console.log(this);
            return this.print();
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value != value){
                prev = prev.next;
            }
            if(prev.next){
                
                let removeNode = prev.next;
                let followerNode = removeNode.next;
                prev.next = followerNode;
                followerNode.prev = prev;
                --this.length;    
                console.log(this);
                return this.print();
            }
            return null;
        }
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
            console.log('Length:', this.length);
        }
    }
}

const list = new DoublyLinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size',list.getSize());

list.append(15);
console.log(list);
list.append(5);
console.log(list);
list.print();

list.prepend(10);
console.log(list);
list.print();
//list.prepend(5);
list.prepend(1);
console.log(list);
list.print();


console.log('---------------\n insert operation\n');
list.insert(0, 0);
list.print();
console.log(list);

list.insert(2, 11);
list.print();
console.log(list);

list.insert(5,18);
list.print();
console.log(list);

console.log('---------------\n remove operation\n');
list.print();
list.remove(10);
list.remove(0);
list.remove(5);
list.remove(3);

console.log('---------------\n remove operation by value\n');
list.print();
list.removeValue(5);
list.removeValue(1);
list.insert(2,15);
list.print();
console.log(list);

list.append(25);
console.log(list);
list.print();
list.removeValue(10);
list.removeValue(18);
// list.removeValue(25);
//list.print();