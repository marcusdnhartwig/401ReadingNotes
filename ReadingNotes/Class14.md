# CLASS 14 Read:Read: Trees & Career Coaching Workshop

*All notes taken from reading material*

## **Soft Skills Engineering**

## Episode 308: FAANG to startup and Google interview prep

-  Two problems: Their tech stack is Ruby on Rails, something that no “big” companies use so I may not be considered seriously because of last X years of working on a not-so-famous tech, and current tech environment screams of a recession. 

- Doing Rails, keeps you pretty pegged into doing rails in the future.

- FAANG atracts FAANG... & FAANG is a grueling process to get hired. 

- Even if you're a stare preformer --> IF your desk is a nice spot, your head may be on the chopping block. 

- Last in First Out - LIFO .. LOL

- Interogate startups.

- Contractors are easier to cut ties with. CUIDADO.

- Pass the interview = plugged into a team.

- Don't oversell yourself because you may get plugged into a space you are over your head in/ may get passed in the opprotunities. 

- FAANG has developed it's own cottage company environments, that prep folkds for the role. 

## Episode 8: Work life balance and on-boarding new engineers

- Everyone doesn't need to suffer, but suffering happens.

- How much energy do I want to put into X vs. how much energy do I want to put into Y.

- TIME is the valuable resource. My focus is my daughter. Work life balance is more time with my daughter.

- Time is NOT infinite.

- "work life balance is the wrong focus" = FOCUS on outcomes.

- The majority of startups the likelyhood of HIGH HOURS goes up.

- Work hard at what you benifit from.

- Avoid being taken advantage of.

- If you're outcome oriented you need to know that the outcome will be benificial to YOU!

- Be comfortable w/ pair programing!

- Pair programing emphisising the ACUTAL values of of the culture of the company.

## Trees [LINK](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html)

*Common Terms*

* **Node** - A Tree node is a component which may contain its own values, and references to other nodes

* **Root** - The root is the node at the beginning of the tree

* **K** - A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, k = 2.

* **Left** - A reference to one child node, in a binary tree

* **Right** - A reference to the other child node, in a binary tree

* **Edge** - The edge in a tree is the link between a parent and child node

* **Leaf** - A leaf is a node that does not have any children

* **Height** - The height of a tree is the number of edges from the root to the furthest leaf

An important aspect of trees is how to traverse them. Traversing a tree allows us to search for a node, print out the contents of a tree, and much more! There are two categories of traversals when it comes to trees:

    - Depth First
    - Breadth First

Binary Trees restrict the number of children to two (hence our left and right children).

If Nodes are able have more than 2 child nodes, we call the tree that contains them a K-ary Tree. In this type of tree we use K to refer to the maximum number of children that each Node is able to have.

**BigO**

The Big O time complexity for inserting a new node is O(n). Searching for a specific node will also be O(n). Because of the lack of organizational structure in a Binary Tree, the worst case for most operations will involve traversing the entire tree. If we assume that a tree has n nodes, then in the worst case we will have to look at n items, hence the O(n) complexity.

The Big O space complexity for a node insertion using breadth first insertion will be O(w), where w is the largest width of the tree. For example, in the above tree, w is 4.

A “perfect” binary tree is one where every non-leaf node has exactly two children. The maximum width for a perfect binary tree, is 2^(h-1), where h is the height of the tree. Height can be calculated as log n, where n is the number of nodes.

**Binary Search Tree**

A Binary Search Tree (BST) is a type of tree that does have some structure attached to it. In a BST, nodes are organized in a manner where all values that are smaller than the root are placed to the left, and all values that are larger than the root are placed to the right.


