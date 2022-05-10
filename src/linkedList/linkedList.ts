import {LinkedListNode} from "./linkedListNode";
import {IdGenerator} from "../utils/idGenerator";
import {networkInterfaces} from "os";

export class LinkedList<T> {

    private idGenerator : IdGenerator;

    private head : LinkedListNode<T> | null;
    private tail : LinkedListNode<T> | null;

    private length : number;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        this.idGenerator = new IdGenerator(1);
    }

    handleIncrementId() : void {
        this.idGenerator.incrementId();
    }

    handleIncrementLength () : void {
        this.length++
    }

    get getLength () : number {
        return this.length;
    }

    get getTail() : LinkedListNode<T> | null {
        return this.tail;
    }

    get getHead() : LinkedListNode<T> | null {
        return this.head;
    }

    toArray () : LinkedListNode<T>[]{
        const nodes : LinkedListNode<T>[]  = [];

        let currentNode : LinkedListNode<T> | null = this.getHead;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString () : string {
        return this.toArray().map(node => node.toString()).toString();
    }

    append(data : T) : LinkedListNode<T> | null {

        const newNode = new LinkedListNode(this.idGenerator.getId,data);
        this.handleIncrementId();
        this.handleIncrementLength()

        if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode; // теперь звост ялвлется последним добавленным эллементом (присваивание по ссылке)

        return this.tail;
    }

    prepend(data : T) : LinkedListNode<T> | null {
        const newNode : LinkedListNode<T>  = new LinkedListNode(this.idGenerator.getId,data,this.getHead);

        this.head = newNode;

        if(!this.getTail) this.tail = newNode;

        return newNode;
    }

    find(compared : T | number, byId ?: boolean) : LinkedListNode<T> | null {

        if(!this.getHead) return null;

        let currentNode : LinkedListNode<T> | null = this.getHead;

        while (currentNode) {
            if((byId ? currentNode.id : currentNode.data) === compared) return currentNode;

            currentNode = currentNode.next;
        }

        return null;
    }

    delete(deleted : T | number, byId ?: boolean) : LinkedListNode<T> | null {
        if(!this.getHead) return null;

        let deletedNode = null;

        while (this.head && (byId ? this.head.id : this.head.data) === deleted) {
            deletedNode = this.head;
            this.head = this.head?.next;
        }

        let currentNode = this.head;

        if(currentNode !== null) {
            while (currentNode.next) {
                if((byId ? currentNode.next.id : currentNode.next.data) === deleted) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else currentNode = currentNode.next;
            }
        }

        if ((byId ? this.tail?.id : this.tail?.data) === deleted) {
            this.tail = currentNode;
        }
        return deletedNode;
    }

    multipleDelete(deletedArr : T[] | number[], byId ?: boolean) :  (LinkedListNode<T> | null)[] | (T | null)[] {
        const deletedItemsById : (LinkedListNode<T> | null)[] = [];
        const deletedItemsByT : (T | null)[] = [];
        deletedArr.forEach((deletedItem : T | number) => {
            if (deletedArr.length === 0) return [];
            if(typeof deletedItem === "number" && byId) deletedItemsById.push(this.delete(deletedItem as number, true));
            else deletedItemsByT.push(this.delete(deletedItem)?.data ?? null);
        });
        return byId ? deletedItemsById : deletedItemsByT
    }
}