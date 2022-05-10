import {QueueNode} from "./queueNode";
import {IdGenerator} from "../utils/idGenerator";

export class Queue<T> {

    private idGenerator: IdGenerator;
    private length: number;

    private head: QueueNode<T> | null;
    private tail: QueueNode<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        this.idGenerator = new IdGenerator(1);
    }

    get getHead() : QueueNode<T> | null {
        return this.head;
    }

    push(data : T): QueueNode<T> | null {
        const newNode = new QueueNode(this.idGenerator.getId, data);
        this.idGenerator.incrementId();
        this.length += 1;

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode; // теперь звост ялвлется последним добавленным эллементом (присваивание по ссылке)

        return this.tail;
    }

    shift() : T | null {
        const head = this.head;

        if(!this.head) return null;

        this.head = (head?.next ?? null)

        return (head?.data ?? null);
    }

    toArray() : QueueNode<T>[] {
        const nodes : QueueNode<T>[]  = [];

        let currentNode : QueueNode<T> | null = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString () : string {
        return this.toArray().map(node => node.toString()).toString();
    }
}