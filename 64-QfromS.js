// --- Directions
// Implement a Queue datastructure using two stacks.

// *Do not* create an array inside of the 'Queue' class.

// Queue should implement the methods 'add', 'remove', and 'peek'.

// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2


class Stack {
  constructor(){
      this.data = [];
  }

  push(record){
      return this.data.push(record);
  }
  pop(){
    return this.data.pop();
  }

  peek(){
    return this.data [this.data.length -1] ;
  }
}


class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    // this.data.unshift(record);
    // Simply add the record in the stack s1.
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
        const record = this.first.pop();
        this.second.push(record);
    }
    const record = this.second.pop(); //just saving a refernce whatever the value was here...

    while(this.second.peek()){
      this.first.push(this.second.pop());
    }

    return record;

    // pop all elements from stack1 into stack2,
    // peek in s1 , so that there are no records left in s1,
    // when last element is left in the stack 1, return it i.e Pop it .

    // we do it by using the method peek();
    // then when all done, move all teh records from s2 to s1 , so that we're ready for next operation.
  }

  peek() {
    // return this.data[this.data.length - 1];

    // Pop all elements from stack1 into stack2,
    while (this.first.peek()) {
        this.second.push(this.first.pop());
    }
    var record = this.second[ this.second.length -1 ];

    while (this.second.peek()) {
        this.first.push(this.second.pop());
    }
    
    return record;
    // only return the last value in stack 2.
  }
}
