function fibonacci(x) {
    if (x <= 2) {
        return 1;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}

console.time('total time');
for(let i = 45; i <= 45; i ++) {
    console.log('Fibonacci number on index:', i, 'has value:', fibonacci(i));
}
console.timeEnd('total time');
