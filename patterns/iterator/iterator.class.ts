class MyNode<T> {
  data: T;
  next: MyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: MyNode<T> | null;

  constructor() {
    this.head = null;
  }

  add(data: T): void {
    const newMyNode = new MyNode<T>(data);
    if (!this.head) {
      this.head = newMyNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newMyNode;
    }
  }

  // delete the last element

  pop(): void {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next!.next) {
      current = current.next!;
    }
    current.next = null;
  }

  // Custom iterable factory method
  createIterable(): CustomIterable<T> {
    return new CustomIterable(this.head);
  }
}

class CustomIterable<T> {
  private head: MyNode<T> | null;

  constructor(head: MyNode<T> | null) {
    this.head = head;
  }

  // Custom iterator factory method
  createIterator(): CustomIterator<T> {
    return new CustomIterator(this.head);
  }
}

class CustomIterator<T> {
  private current: MyNode<T> | null;

  constructor(head: MyNode<T> | null) {
    this.current = head;
  }

  hasNext(): boolean {
    return !!this.current;
  }

  next(): T | null {
    if (this.hasNext()) {
      const { data } = this.current!;
      this.current = this.current!.next;
      return data;
    } else {
      return null;
    }
  }
}
