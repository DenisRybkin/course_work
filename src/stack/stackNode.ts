export class StackNode<T> {

    id: number;
    data: T;
    prev: StackNode<T> | null;

    constructor(id : number,date : T, prev ?: StackNode<T> | null) {
        this.id = id;
        this.data = date;
        this.prev = (prev ?? null);
    }

    toString(): string {
        return JSON.stringify(this.data);
    }
}