class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((edge) => edge !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((edge) => edge !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const nextVertex = this.adjacencyList[vertex].shift();
            this.removeEdge(vertex, nextVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFS1(start) {
        const stack = [];
        const result = [];
        stack.push(start)
        const visited = {};
        // visited[start] = true;

        let current;
        while(stack.length) {
            current = stack.pop();
            result.push(current);
            if (!visited[current]) visited[current] = true;

            for (let i = 0; i < this.adjacencyList[current].length; i++) {
                if (!visited[this.adjacencyList[current][i]]) {
                    visited[this.adjacencyList[current][i]] = true;
                    stack.push(this.adjacencyList[current][i]);
                }
            }
        }
        return result;
    }

    DFS2(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function helper(vertex) {
            if (!adjacencyList[vertex]) {
                return;
            }
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach((each) => {
                if (!visited[each]) {
                    helper(each);
                }
            })
        }
        helper(start);
        return result;
    }

    BFS(start) {
        const queue = [];
        queue.push(start);
        const result = [];
        const visited = {};

        visited[start] = true;
        let current;

        while(queue.length) {
            current = queue.shift();
            result.push(current);

            this.adjacencyList[current].forEach((each) => {
                if (!visited[each]) {
                    queue.push(each);
                    visited[each] = true;
                }
            })
        }
        return result;
    }

    // review later
    isThereACycle() {

    }

}