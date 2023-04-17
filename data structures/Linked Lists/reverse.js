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

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    
    append (value){

        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
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
            node.next = prev.next;
            prev.next = node;
        }
        this.length++;
        return this;
    }

    remove(index){
        if(this.isEmpty() || index >= this.length){
            console.log('Bad index:',index);
            return this;
        }else if(index === 0){
            const value = this.head.value;
            this.head = this.head.next;
            --this.length;
            console.log('removed:', value);
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
            return this.print();
        }else{
            let prev = this.head;
            for(let i = 0; i < index -1; ++i){
                prev = prev.next;
            }
            
            let temp = prev.next;
            const value = temp.value;
            prev.next = temp.next;
            --this.length;
            console.log('removing:', value);
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
            --this.length;
            return this.print();
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value != value){
                prev = prev.next;
            }
            if(prev.next){
                let removeNode = prev.next;
                prev.next = removeNode.next;
                --this.length;    
                return this.print();
            }
            return null;
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

}
const list = new LinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size',list.getSize());
//list.prepend(10);
list.prepend(5);
//list.prepend(1);
//list.append(15);

list.insert(0, 1);
list.insert(2, 10);
list.insert(2,15);
list.insert(4,20);

list.print();

list.reverse();
list.print();
