// #1

let counter = (function (n) {
    let count = n;
    return function (a) {
        count = a !== undefined ? a : count;
        return count++;
    };
}(0));

console.log(counter());
console.log(counter());
console.log(counter(4));
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
console.log(counter());

// #2

let counting = (function () {
    let count = 0;

    return {
        value(param) {
            if (param !== undefined) count = param;
            return count;
        },
        decrement() {
            count--;
        },
        increment() {
            count++;
        }
    };
}());

console.log(counting.value()); // 0
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); // 3
counting.decrement();
counting.decrement();
console.log(counting.value()); // 1
console.log(counting.value(100)); // 100
counting.decrement();
console.log(counting.value()); // 99
console.log(counting.value(200)); // 200
counting.increment();
console.log(counting.value()); // 201

// #3


