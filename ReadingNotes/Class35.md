# CLASS 35 Implementation: Graphs

*All notes taken from reading material*

## [Graphs](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html)

*There is a ton of material in here*

A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

1. **Vertex** - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.

2. **Edge** - An edge is a connection between two nodes.

3. **Neighbor** - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.

4. **Degree** - The degree of a vertex is the number of edges connected to that vertex.

- An Undirected Graph is a graph where each edge is undirected or bi-directional. This means that the undirected graph does not move in any direction.

- A Directed Graph also called a Digraph is a graph where every edge is directed.

A complete graph is when all nodes are connected to all other nodes.
**This one is nutty**

A connected graph is graph that has all of vertices/nodes have at least one edge.

A disconnected graph is a graph where some vertices may not have edges.

An acyclic graph is a directed graph without cycles.

A cycle is when a node can be traversed through and potentially end up back at itself.

A Cyclic graph is a graph that has cycles.
A cycle is defined as a path of a positive length that starts and ends at the same vertex.

  *We represent graphs through:*

    1. Adjacency Matrix

    2. Adjacency List

An Adjacency matrix is represented through a 2-dimensional array. If there are n vertices, then we are looking at an n x n Boolean matrix

Each Row and column represents each vertex of the data structure. The elements of both the column and the row must add up to 1 if there is an edge that connects the two, or zero if there isn’t a connection.

An adjacency list is the most common way to represent graphs.

An adjacency list is a collection of linked lists or array that lists all of the other vertices that are connected.

**A weighted graph is a graph with numbers assigned to its edges. These numbers are called weights.**

  * When representing a weighted graph in a matrix, you set the element in the 2D array to represent the actual weight between the two paths. If there is not a connection between the two vertices, you can put a 0, although it is known for some people to put the infinity sign instead.

## [CLICK HERE TO CHECK OUT HOW TO TRAVERSE](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html#traversals)