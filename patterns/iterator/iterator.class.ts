class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListIterator<T> implements Iterator<T> {
  private current: ListNode<T> | null;

  constructor(head: ListNode<T> | null) {
    this.current = head;
  }

  public next(): IteratorResult<T> {
    if (this.current === null) {
      return { done: true, value: undefined as any };
    } else {
      const value = this.current.data;
      this.current = this.current.next;
      return { done: false, value };
    }
  }
}

export class LinkedList<T> implements Iterable<T> {
  private head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  public append(data: T): void {
    if (this.head === null) {
      this.head = new ListNode(data);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new ListNode(data);
    }
  }

  [Symbol.iterator](): Iterator<T> {
    return new LinkedListIterator(this.head);
  }
}

