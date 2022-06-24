# CLASS 10 Read: Stacks & Queues

*All notes taken from reading material*

![image](/assets/401-imgs/PDFP.png)

## Stacks and Queues

### What is a Stack? 

[THIS-IS-THE-LINK-TO-THIS-ASSET](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html)

A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

Common Terms for a stack is:

    1. Push- Nodes or items that are put into the stack are pushed
    2. Pop- Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.
    3. Top- This is the top of the stack.
    4. Peek- When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.
    5. IsEmpty- returns true when stack is empty otherwise returns false.

Stacks follow these concepts:

**FILO** = First In Last Out
OR
**LIFO** =  Last In First Out

![img](/assets/401-imgs/stackVis.png)

### What is a Queue?

Common terminology for a queue is:

1. **Enqueue** - Nodes or items that are added to the queue.
2. **Dequeue** - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.
3. **Front** - This is the front/first Node of the queue.
4. **Rear** - This is the rear/last Node of the queue.
5. **Peek** - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.
6. **IsEmpty** - returns true when queue is empty otherwise returns false.

Queues follow these concepts:

*FIFO* = First In First Out
OR
*LILO* = Last In Last Out

![img](/assets/401-imgs/queue.png)