// even though this is not about implementing a new DS, the prerequisites are graph and a priority queue (binary heap)
// understand the importance of algo
// implement a weighted graph! (dijkstra's works on weighted graph)
// implement it using a naive priority queue
// implement it using a binary heap priority queue

// one of the most famous and widely used algos!
// it finds the shortest path between two vertices on a graph - what's the fastest way to get from point A to point B?
// used => GPS finding fastest route, networking routing (finds open shortest path for data), biology (used to model the spread of virus among humans), airline tickets(finding chepest route to destination), etc
// right now, our graphs are just undirected vertices and edges and unweighted so we can't assign values to the edges (finding shortest path)

// Let's write a weighted graph! - assinging values between two points!
// now we not only need to store the edges but also values
// 'A' : [ {node: 'B', weight: 10}]
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // takes in weight!
    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    // https://cs.slides.com/colt_steele/graphs#/70
    // every time we look to visit a new node, we pick the node with the smallest known distance to visit first
    // once moved to that node, we look at each of its neighbors
    // for each neighboring node, we calculate the distance by summing theh total edges that lead to the node we're checking from the from the starting node
    // if the new total distance to a node is less than the previous total, we store the new shorter distance for that node

    // Dijkstra's Pseudocode    

    // func should accept a starting and end vertex
    dijkstras(startV, endV) {
        const distances = {};
        const priorityQueue = new PriorityQueue();
        const previous = {};
        let visited = []; // return at the end

        // create an object (called distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0

         // after setting a value in the distances obj, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
        for (let vertex in this.adjacencyList) {
            if (vertex === startV) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
            // create another obj called previous and set each key to be every vertex in the adjacency list with a value of null
            previous[vertex] = null;
        }
        // start looping as long as there is anything in the priority queue
        let shortest;
        while(priorityQueue.values.length) {

            // dequeue a vertex from the priority queue
            // if that vertex is the same as the ending vertex - we are done
            // otherwise, loop through each value in the adjacency list at that vertex
            shortest = priorityQueue.dequeue().val;
            if (shortest === endV) {

                while (previous[shortest]) {
                    visited.push(shortest);
                    shortest = previous[shortest];
                }
                break;
            }
            // calculate the distance to that vertex from the starting vertex
            // if the distance is less than what is currently stored in our distances obj, update the distances obj with new lower distance, update the previous obj to contain that vertex, enqueue the vertex with the total distance from the start node
            
            if (shortest || distances[shortest] !== Infinity) {
                for (let neighbor in this.adjacencyList[shortest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[shortest][neighbor];

                    // calculate new distance to neighboring node
                    let candidate = distances[shortest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    if (candidate < distances[nextNeighbor]) {

                        // update new shortest distance to neighbor
                        distances[nextNeighbor] = candidate;

                        // update previous - how we got to the neighbor
                        previous[nextNeighbor] = shortest;

                        //enqueue in priority queue with new priority
                        priorityQueue.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return visited.concat(shortest).reverse();
    }
}





// simplified priority queue: everytime you insert, you re-sort
// sorting => O(N * log (N))
class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }

const graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]


// Both for..of and for..in statements iterate over lists; the values iterated on are different though, for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.