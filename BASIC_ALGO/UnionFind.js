class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill().map((_, i) => i); // Initialize each person as their own set
        this.rank = new Array(n).fill(0); // Rank for union by rank optimization
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) return; // Already in the same set

        // Union by rank: Attach the smaller tree to the larger tree
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
    }
}

// Example usage:
const n = 10; // Number of individuals
const uf = new UnionFind(n);

// Add friendships (relationships)
uf.union(0, 1);
uf.union(1, 3);
uf.union(2, 5);
uf.union(2, 8);
uf.union(9, 4);
uf.union(6, 9);

// Check if individuals are friends
console.log(uf.find(0) === uf.find(3)); // Are 'a' and 'd' friends?
console.log(uf.find(2) === uf.find(10)); // Are 'c' and 'h' friends?
