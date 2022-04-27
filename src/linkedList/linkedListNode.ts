export class LinkedListNode<T> {

    id: number;
    data: T;
    next: LinkedListNode<T> | null;

    constructor(id: number, data: T, next ?: LinkedListNode<T> | null) {
        this.id = id;
        this.data = data;
        this.next = (next ?? null);
    }

    toString(): string {
        return JSON.stringify(this.data);
    }
}