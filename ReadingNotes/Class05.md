# CLASS 05 LINKED LISTS

*All notes taken from reading material*

## Big O: Analysis of Algorithm Efficiency

- **Big O(oh)** notation is used to describe the efficiency of an algorithm or function. This efficiency is evaluated based on 2 factors:

    1. **Running Time** (also known as time efficiency / complexity)
        *The amount of time a function needs to complete.*
    2. **Memory Space** (also known as space efficiency / complexity)
        *The amount of memory resources a function uses to store data and instructions.*

- Big O’s role in algorithm efficiency is to describe the **Worst Case** of efficiency an algorithm can have in performing it’s job. 

-  In order to analyze these limiting factors, we should consider 4 Key Areas for analysis:

    1. *INPUT SIZE*
    2. *UNITS OF MEASUREMENT*
    3. *ORDERS OF GROWTH*
    4. *BEST CASE, WORST CASE, AVERAGE CASE*

### Input Size

Input Size refers to the size of the parameter values that are read by the algorithm. This does not simply refer to the number of parameters an algorithm reads, but takes into account the size of each parameter value as well.

* We will use the letter n to refer to the Input Size value.

* The higher this number, the more likely there will be an increase to Running Time and Memory Space.



### Units of Measurement

**In order to quantify the Running Time in our analysis, we will consider Three Measurements of time:**

1. The time in *milliseconds* from the start of a function execution until it ends.

2. The number of *operations* that are executed.

3. The number of *“Basic Operations”* that are executed.

**In order to quantify Memory Space, we can consider Four Sources of Memory Usage during function run-time:**

1. The amount of space needed to hold the *code for the algorithm.*

2. The amount of space needed to hold the *input data.*

3. The amount of space needed for the *output data.*

4. The amount of space needed to hold *working space* during the calculation.

Always be aware that Space Complexity and Time Complexity are measured differently and should be **analyzed separately.**

Contemporary computing affords most machinees with multiple GigaBytes of working memory, so algorithm space complexity is not as much of a concern as it used to be.

### Orders of Growth

We can describe overall efficiency by using the input size n and measuring the overall Units of Space and Time required for the given input size n. As the value of n grows, the Order of Growth represents the increase in Running Time or Memory Space.

![img](/assets/401-imgs/ordersofgrow.png)

**Constant Complexity** means that no matter what inputs are thrown at our algorithm, it always uses the same amount of time or space. The number 1 is used to represent a constant value.

**Logarithmic Complexity** represents a function that sees a decrease in the rate of complexity growth, the greater our value of n. This can be seen when we are performing calculations on sorted data. 

**Linearithmic Complexity** is used to describe a growth rate of n by lgn. This represents complexity that grows with n, but also by lgn. Linearithmic functions grow faster than input size n, but not by much. 

**Quadratic Complexity** describes an algorithm with complexity growing at a rate of input size n multiplied by n. This is often seen in algorithms that have nested loops which perform iterative or recursive logic on all values of n and immediately iterate or recurse again for each value of n.

**Cubic Complexity** is typically just a higher degree of what makes the quadratic complexity grow at such a high rate. We can illustrate this by nesting more loops within our algorithm. An example of Cubic efficiency could involve an additional set of nested loops.

**Exponential Complexity** represents very rapidly growing complexity, such that whatever our input size n, we are performing the same number of iterative or recursive loops as n. If we have to examine subsets of a set of data, and compare against all possible subsets, we may have exponential complexity growth.

*The fibonacci sequence is a popular case for exponential complexity growth.*

**Factorial Complexity** means that the our space and time requirements grow extremely fast, relative to our input size. At this rate we are performing an extreme amount of calculations for every value within our input of size n. This aften happens with we need to calculate all possible permutations of something like a string or an array.

~[img](/assets/401-imgs/OrdersOFGROWTH.png)

### Best/Worst/Average Case

Each of these cases could be analyzed as we consider the overall question: 
**¿**As inputs n fluctuate in size and order, how does this affect our orders of Growth **?**

    - Worst Case: The efficiency for the worst possible input of size n
        - Big O(oh): This notation describes the Worst Case for an algorithm. The Order of Growth used represents the upper bounds of Time and Space.

    - Best Case: The efficiency for the best possible input of size n
        - Big Omega: This notation describes the Best Case for a given algorithm. The Order of Growth used represents the lower bounds of Time and Space.

    - Average Case: The efficiency for a “typical” or “random” input of size n.
        - Big Theta: This notation describes the Average Case. The Order of Growth used represents the tight bound of Time and Space.

![img](/assets/401-imgs/asymtoticcode.png)

## Linked Lists - What is a Linked List? 

* A Linked List is a sequence of *Nodes* that are connected/linked to each other. The most defining feature of a Linked List is that each Node references the next Node in the link.

There are two types of Linked List - Singly and Doubly. We will be implementing a Singly Linked List in this implementation.

### Terminology:

![img](/assets/401-imgs/terms.png)

**Traversal** When traversing a linked list, you are not able to use a foreach or for loop. We depend on the Next value in each node to guide us where the next reference is pointing. The Next property is exceptionally important because it will lead us where the next node is and allow us to extract the data appropriately.
    - The best way to approach a traversal is through the use of a while() loop. This allows us to continually check that the Next node in the list is not null. If we accidentally end up trying to traverse on a node that is null, a NullReferenceException gets thrown and our program will crash/end.

... Listen FUTURE MARCUS ... HERE IS THE LINK TO THE SOLID READING MATERIAL... IT'S A LOT.  
[link](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)

## What’s a Linked List, Anyway? [Part 1]



## What’s a Linked List, Anyway? [Part 2]