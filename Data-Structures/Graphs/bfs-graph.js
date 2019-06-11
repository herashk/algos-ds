
class Graph {
    constructor() {
        this.adjacencyList = {}; // hash table! 
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const nextVertex = this.adjacencyList[vertex].pop();
            this.removeEdge2(vertex, nextVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vertex) {

        const list = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfpHelper(v) {
            if (!adjacencyList[v]) {
                return;
            }
            list.push(v);
            visited[v] = true;
            for (let i = 0; i < adjacencyList[v].lenegth; i++) {
                let adjacent = adjacencyList[v][i]
                if (!visited[adjacent]) {
                    dfpHelper(adjacent);
                }
            }
            // practice using higher order functions!
            // adjacencyList[v].forEach(adjacent => {
            //     if (!visited[adjacent]) {
            //         return dfs(adjacent)
            //     }
            // })
        }
        dfpHelper(vertex);
        return list;
    }

    DFSIterative(start) {
        const stack = [];
        const result = [];
        const visited = {};

        stack.push(start);
        visited[start] = true;

        let next; // so that we don't redeclare a new var every loop
        while(stack.length) {
            console.log('stack', stack);
            next = stack.pop();
            result.push(next);

            this.adjacencyList[next].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                    visited[neighbor] = true;
                }
            })
        }
        return result;
    }

    // makes use of heights (how many jumps from the starting node)
    // rather than using a stack, we use a queue! (push and shift) rather than push and pop for a stack
    // should accept a starting vertex
    // create a queue (arr) and place the starting vertex in it
    // create a result array to return at the end and make a visited has and mark the starting vertex as visited
    // loop as long as there is anything in the queue
    // remove the first vertex from the queue and push it into the result array
    // loop over each vetex in the adjacency list for the vertex you are visiting
    // if not inside the visited hash, mark it as visited and enqueue that vertex
    // return result list ABCDEF
    // BFS uses a queue, DFS iterative uses a stack!!!!!!!! that makes sense because with a DFS, you will be popping off from the end to go to the next neighbor 
    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let next;
        while (queue.length) {
            next = queue.shift();
            result.push(next);

            this.adjacencyList[next].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })

            // this.adjacencyList[next].slice().reverse().forEach((neighbor) => {
            //     if (!visited[neighbor]) {
            //         visited[neighbor] = true;
            //         queue.push(neighbor);
            //     }
            // })
            // this will spit out ACBEDF still BFS but backwards!
        }
        return result;
    }

}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

