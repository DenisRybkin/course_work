import {LinkedList} from "./linkedList/linkedList";


const str: string = "ТЕСТ";

const list = new LinkedList();

list.append(() => {const b = 8;});
list.append(4);



console.log(list.getLength);
