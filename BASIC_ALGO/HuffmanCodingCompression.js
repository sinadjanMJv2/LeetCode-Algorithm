class Node {
    constructor(character, frequency) {
        this.character = character;
        this.frequency = frequency;
        this.left = null;
        this.right = null;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node) {
        this.queue.push(node);
        this.queue.sort((a, b) => a.frequency - b.frequency);
    }

    dequeue() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }
}

const huffCodes = {}; // To store Huffman codes

function buildTree(data) {
    const queue = new PriorityQueue();
    for (const character in data) {
        if (data.hasOwnProperty(character)) {
            const node = new Node(character, data[character]);
            queue.enqueue(node);
        }
    }
    while (queue.size() > 1) {
        const node1 = queue.dequeue();
        const node2 = queue.dequeue();
        const combined = new Node(null, node1.frequency + node2.frequency);
        combined.left = node1;
        combined.right = node2;
        queue.enqueue(combined);
    }
    return queue.dequeue();
}

function generateCodes(node, prefix = '') {
    if (node === null) return;
    if (node.character !== null) {
        huffCodes[node.character] = prefix;
        return;
    }
    generateCodes(node.left, prefix + '0');
    generateCodes(node.right, prefix + '1');
}

function encode(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
        output += huffCodes[data[i]];
    }
    return output;
}

function decode(data, node) {
    let output = '';
    let currentNode = node;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '0') currentNode = currentNode.left;
        else currentNode = currentNode.right;
        if (currentNode.character !== null) {
            output += currentNode.character;
            currentNode = node;
        }
    }
    return output;
}

// Example usage:
const inputString = 'ABRACADABRA';
const charFrequencies = {};
for (const char of inputString) {
    charFrequencies[char] = (charFrequencies[char] || 0) + 1;
}

const huffmanTree = buildTree(charFrequencies);
generateCodes(huffmanTree);

const encodedData = encode(inputString);
console.log('Encoded:', encodedData);

const decodedData = decode(encodedData, huffmanTree);
console.log('Decoded:', decodedData);
