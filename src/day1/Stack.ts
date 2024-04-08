type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;

    constructor() {
        this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const node = {
            value: item,
        } as Node<T>;
        if (!this.tail) {
            this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const tail = this.tail;
            this.tail = undefined;
            return tail?.value;
        }

        const tail = this.tail as Node<T>;
        this.tail = tail.prev;

        // in traditional languages you would free up the tail here

        return tail.value;
    }

    peek(): T | undefined {
        return this.tail?.value;
    }
}
