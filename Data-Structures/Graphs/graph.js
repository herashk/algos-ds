// what is a graph? compare and contrast different types of graphs anad their use case, implement a graph using an adjacency list, traverse through a graph using BFS and DFS, compare and contrast graph traversal algos
// graph = collection of nodes and connections between those nodes. A finite set of nodes and connections between them. Tree is a type of a graph. 
// Usage = social networks, location/mapping, routing algorithms, visual hierarchy, file system optimizations, recommendation engines, and EVERYWHERE!!

// TYPES OF GRAPHS & terminology
// vertex - fancy term for a node
// edge - connection between nodes
// weighted/unweighted - vaues assigned to distances between vertices
// directed/undirected - directions assigned to distanced between vertices

// undirected graph - two ways connections. If we were traversing it there are multiple ways. There is no direction assigned to edges (ex - facebook friends graph. Maria and Tim can see each other's contents)
// directed graph - often represented to arrows. It shows you how it should be traversed. There is a direction assigned to the edge (ex - instagram followers graph. It is not a two way connection)
// weighted graph - when there's values assigned to the edges. There is information about the connection itself
// unweighted graph - no values assigned to edges
// you can have weighted undirected graph, unweighted directed graph, etc
// so google maps would use directed (some may have one way roads) weighted graph because there will be distance information between differnet points

// How can we represent graphs? How do we model it? How do we store them?
// adjacency matrix and adjacency list
// Adjacency matrix - using a matrix to represent edges. Storing edges in the matrix
// Adjacenty list - using an array to represent edges. The indexes can act as the vertices and each element can store what's on the sides (connected to) that index. What if they are not numeric? You can use a hash table - key value ds. 
// A: ['B', 'F']; B: ['A', 'C']

// BIG O - |V| - number of vertices   |E| - number of edges
// Operation     |     Adjacency List     |     Adjacency Matrix
// Add Vertex    |         O(1)           |       O(|v^2|)
// Add Edge      |         O(1)           |        O(1)
// Remove Vertex |     O(|V| + |E|)       |       O(|v^2|)
// Remove Edge   |          O(|E|)        |         O(1)
// Query         |     O(|V| + |E|)       |        O(1)
// Storage       |     O(|V| + |E|)       |       O(|v^2|)

// Adjacency list size is governed by how many edges we have
// Adjacency matrix size is governed by how many vertices we have (adding more columns and rows!)
// Adjacey List can take up less space (in sparse graphs). Adjacency Matrix takes up more space (in sparse graphs)
// List is faster to iterate over all edges, Matrix is more difficult to iterate (iterate over things that aren't edges)
// List can be slower to look up specific edges, Matrix is O(1); simply find a slot where there is an edge

// We will use the list in our implementation. Why? Real world data tends to be sparse. We can have ton of nodes and lots of vertices but they are not all connected. If we were to use a matrix in this case, the matrix will be massive!

class Graph {
    constructor() {
        this.adjacencyList = {}; // hash table! 
    }

    // accepts a name of a vertex, it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    // ex - graph.addVertex('korea') => { 'korea': []}
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // like an airline that travels between two cities
    // accept two vertices, - vertex1 and vertex2
    // should find in the adjacency list the key of vertex1 and push vertex2 to the array
    // should find in the adjacency list the key of vertex2 and push vertex1 to the array
    // graph.addEdge('korea', 'new york')
    // { 'korea' = ['new york'], 'new york'] = ['korea']}
    // if we wanted to make this a directed graph, we wouldn't add it to both vertex array
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // should accept two vertices, should reassign the key of vertex1 to be an array that does not contain vertex2. Do the same thing for vertex2
    removeEdge(vertex1, vertex2) {
        let vertex1Edges = this.adjacencyList[vertex1];
        let vertex2Edges = this.adjacencyList[vertex2];
        for (let i = 0; i < vertex1Edges.length; i++) {
            if (vertex1Edges[i] === vertex2) {
                let temp = vertex1Edges[i];
                vertex1Edges[i] = vertex1Edges[0];
                vertex1Edges[0] = temp;
                vertex1Edges.shift();
            }
        }

        for (let i = 0; i < vertex2Edges.length; i++) {
            if (vertex2Edges[i] === vertex1) {
                let temp = vertex2Edges[i];
                vertex2Edges[i] = vertex2Edges[0];
                vertex2Edges[0] = temp;
                vertex2Edges.shift();
            }
        }
    }

    // use a higher order function
    removeEdge2(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }

    // removing a city from the map = removing all edges + the vertex
    // should accept a vertex
    // should loop as long as there are any other vertices in the adjacency list for that vertex
    // inside the loop, call the removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    // delete the key in the adjacency list for that vertex
    removeVertex(vertex) {
        // you want to loop as long as there are other vertices in the list for the vertex you want to remove

        while(this.adjacencyList[vertex].length) {
            const nextVertex = this.adjacencyList[vertex].pop();
            this.removeEdge2(vertex, nextVertex);
        }
        delete this.adjacencyList[vertex];
    }


    // this solution does not work because this.adjacencyList[vertex] will be shorter everytime this.removeEdge is called but i is incrementing
    removeVertex2(vertex) {
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            this.removeEdge2(vertex, this.adjacencyList[vertex][i]);
        }
        delete this.adjacencyList[vertex];
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
