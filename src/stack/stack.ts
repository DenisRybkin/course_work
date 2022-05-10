import {IdGenerator} from "../utils/idGenerator";
import {StackNode} from "./stackNode";


export class Stack<T> {
    private idGenerator : IdGenerator;

    private lastNode : StackNode<T> | null;
    length = 0;

    constructor() {
        this.length = 0;
        this.lastNode = null;
        this.idGenerator = new IdGenerator(1);
    }

    get getLength() : number {
        return this.length;
    }

    push(data : T) : T {
        const newLastNode : StackNode<T> = new StackNode<T>(this.idGenerator.getId, data, this.lastNode);
        this.lastNode = newLastNode;
        this.idGenerator.incrementId();
        this.length += 1;
        return newLastNode.data;
    }

    pop() : T | null {
        let result : T | null;
        if(this.lastNode !== null) {
            result =  this.lastNode.data;
            this.lastNode = this.lastNode.prev;
            this.length -= 1;
            return result;
        }
        return null
    }

    toArray() : StackNode<T>[] {
        const nodes : StackNode<T>[]  = [];

        let currentNode : StackNode<T> | null = this.lastNode;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.prev;
        }

        return nodes;
    }

    toString () : string {
        return this.toArray().map(node => node.toString()).toString();
    }
}