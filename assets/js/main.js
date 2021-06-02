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
        increment() {
            count++;
        },
        decrement() {
            count--;
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

let myPrint = function(a, b, res) {
    return `${a}^${b}=${res}`;
}

let myPow = function (a, b, callback) {

    function pow(a, b) {
       return (b == 1) ? a : (a * pow(a, b - 1));
    };
    return callback(a, b, pow(a, b));
};
console.log(myPow(3, 3, myPrint));

// #4-5-6

function fullCar() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};
let yearNow = new Date().getFullYear();
let car = {
    engine: 4900,
    model: 'Camaro',
    name: 'Chevrolet',
    year: 2019,
    info: fullCar,
    used: 'new',
    get used () {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used (value) {
        if (value === 'new' && this.year !== yearNow) this.year = yearNow;
    }
};
let car2 = {
    engine: 6000,
    model: 'Mustang',
    name: 'Ford',
    year: 2021,
    info: fullCar,
    used: 'used',
    get used () {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used (value) {
        if (value === 'new' && this.year !== yearNow) this.year = yearNow;
    }
    
};

console.log(car.info());
console.log(car2.info());

// #7

let list = [12, 23, 100, 34, 56, 9, 233];
let myMax = function(arr) {
    return Math.max.apply(Math, arr);
};
console.log(myMax(list)); // 233

// #8

function myMul(a, b) {
    return a * b;
};
console.log(myMul(3, 3));

let myDouble = myMul.bind(null, 2);
console.log(myDouble(3));

let myTriple = myMul.bind(null, 3);
console.log(myTriple(3));

// #9

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

let myUniq = function(arr) {
    let set = new Set();
     arr.forEach((value) => { set.add(value)});
     return set;
};

console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));