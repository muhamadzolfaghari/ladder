// Function to measure performance with DocumentFragment
function appendWithFragment() {
    const fragment = document.createDocumentFragment();
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        const div = document.createElement('div');
        div.textContent = 'Item ' + i;
        fragment.appendChild(div);
    }
    document.body.appendChild(fragment);
    const end = performance.now();
    return end - start;
}

// Function to measure performance without DocumentFragment
function appendWithoutFragment() {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) {
        const div = document.createElement('div');
        div.textContent = 'Item ' + i;
        document.body.appendChild(div);
    }
    const end = performance.now();
    return end - start;
}

// Run the tests and log the results
console.log('Performance with DocumentFragment: ' + appendWithFragment() + ' ms');
console.log('Performance without DocumentFragment: ' + appendWithoutFragment() + ' ms');



const fragment = document.createDocumentFragment();

for (let i = 0; i < 10000; i++) {
    const div = document.createElement('div');
    div.textContent = 'Item ' + i;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);