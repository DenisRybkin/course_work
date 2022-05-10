import {LinkedList} from "./linkedList/linkedList";
import {Stack} from "./stack/stack";
import {Queue} from "./queue/queue";


const str: string = "ТЕСТ";

const list = new LinkedList();
const stack = new Stack();
const queue = new Queue()

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// queue.push(5);
// queue.push(6);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
//
// console.log(list.multipleDelete([2,5]), list.toString());
// console.log(stack.pop())
console.log(queue.shift(),queue.shift(),queue.shift(),queue.toString())
