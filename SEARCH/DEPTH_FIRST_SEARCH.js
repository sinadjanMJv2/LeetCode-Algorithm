const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

function dfsRecursive(graph, start, visited = new Set()) {
    console.log(start);
    visited.add(start);

    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Usage
dfsRecursive(graph, 'A');

function dfsIterative(graph, start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Usage
//dfsIterative(graph, 'A');
