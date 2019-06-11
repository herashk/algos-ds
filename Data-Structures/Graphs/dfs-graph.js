// visiting, updating, checking each vertex in a graph
// in a real life app, you may not be visiting each vertex
// trees are special subset of graphs! in any given node, there is only one path to another node
// with a graph, there is no root. So where do we start from? 
// with a graph, we need to specify a starting point unlike a tree which starts from the root usually
// Graph traversal usages => peer to peer networking, web crawlers (web pages that link to another), finding 'closest' matches/recommendations, shorting path problems (GPS navigation, solving mazes, AI/shortest path to win the game)

// DF Graph Traversal - recursive & iterative = means moving away from a graph
// it's not too different from trees but there are times when you will have to visit the same node multiple times and you might have to keep track of whether you visited it or not
// we want to travel down a branch as far as possible before we backtrack


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

    // DFS PseudoCode Recursive
    // DFS(vertex):
    // if vertex is empty, return (base case)
    // add vertex to results hash
    // mark vertex as visited
    // for each neighbor in vertex's neighbors:
    // if neighbor is not visited, recursively call DFS on neighbor

    // should accept a starting node
    // create a list to store the end result to be returned at the end
    // create a hash to store visited vertices
    // create a helper function that accepts a vertex
    // the helper func should return early if the vertex is empty. The helper func should place the vertex it accepts into the visited hash and push that vertex into the result array. Loop over all the values in the adjacencyList for that vertex. If any of those values have not been visited, recursively invoke the helperfunction with that vertex
    // invoke the helper with the starting vertex
    // return result array
    // below example should return ABDECF
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

    // instead of using a callstack to keep track of where we are, use a stack(array)
    // let S be a stack. S.push(Starting vertex)
    // while S is not empty
    // vertex = S.pop()
    // if vertex is not labeled as discovered,
    // visit vertex (add to result list)
    // label vertex as discovered
    // for each of vertex's neighbors, N do S.push(N)

    // func should accept a starting node
    // create a stack to keep traack of vertices
    // create a list to store the end result, to be returned at the end
    // create a hash to store visited vertices
    // add the starting vertex to the stack and mark it visited
    // while the stack has sth in it, pop the next vertex from the stack. If that vertex hasn't been visited yet, mark it as visited, add it to the result list, push all of its neighbors into the stack
    // return result list at the end
    // this will give a different order even though it is still DFS
    // should spit out ACEFDB
    // with iterative solution, we are working from the end of each element array in the adjacency list rather than the beginning which was the approach for recursive solution
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
                    // cannot push to result here because we are not pushing in what was popped off the stack meaning the next vertex but just immediately as we find it
                    // result.push(neighbor);
                }
            })
        }
        return result;
    }

    // sample from another student
    dfsRecursive(v) {
        const visited = {};
        const helper = (o) => {
          visited[o] = true;
          this.adjacencyList[o].filter(i => !visited[i])
            .forEach(i => helper(i));
        };
        helper(v);
        return Object.keys(visited);
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

