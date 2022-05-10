export class QueueNode<T> {

    id: number;
    data: T;
    next: QueueNode<T> | null;

    constructor(id : number,date : T, prev ?: QueueNode<T> | null) {
        this.id = id;
        this.data = date;
        this.next = (prev ?? null);
    }

    toString(): string {
        return JSON.stringify(this.data);
    }
}