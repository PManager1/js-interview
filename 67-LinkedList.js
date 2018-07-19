// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


// Node keeps track of the [data] and [next] pointer where it points to.
  //  [ data ]  [0]-> null
  //     data   next pointer  // it sets up the next node on that chain.


class Node {
  constructor (data, next = null ){
      this.data = data;
      this.next = next;
  }
}

// LList class has no idea on how many nodes it has
// in order to make any decision, it would have to crawl over
// the list of Nodes and then arrive to any decision.
// LList all it knows is the first node.

class LinkedList {
  constructor (){
    this.head = null;
  }

  insertFirst(data){
    const node = new Node(data, this.head);
    this.head = node;  //since on initiation we dont have any info on the head.
  }

  size(listOb){
    return listOb.length();

  }
}

const list = new LinkedList();
  list.head = new Node(10);

  console.log('42 -  list =', list );
     // LinkedList { head: Node { data: 10, next: null } }


// const n1 = new Node('Hi');
// console.log(' n1.data ', n1.data );
// console.log(' n1.next ', n1.next );
//
// const n2 = new Node('Hi', n1 );
// console.log(' n2.data ', n2.data );
// console.log(' n2.next ', n2.next );
//
