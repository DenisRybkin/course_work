export class IdGenerator {

    private id : number

    constructor(id : number) {
        this.id = id;
    }

    get getId() : number {
        return this.id;
    }

    incrementId() : void {

        this.id += 1;
    }
}