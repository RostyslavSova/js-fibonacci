function fibRecursion(n) {
    return n <= 2 ? n : fibRecursion(n - 1) + fibRecursion(n - 2);
}

function fibCycle(n) {
    let a = 1;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

let arrOfFib = [1, 1];

function fibArray(n) {
    if (n in arrOfFib) {
        return arrOfFib[n];
    }
    arrOfFib[n] = fibArray(n - 1) + fibArray(n - 2);
    return arrOfFib[n];
}

let work = true;
while (work === true) {
    let n = parseInt(prompt('Enter a positive integer number'));
    let alg = parseInt(prompt('Choose algorithm: Enter 1 - Recursion, Enter 2 - Cycle, Enter 3 - With Array'));
    let answer = 0;
    switch (alg) {
    case 1:
        answer = fibRecursion(n);
        break;
    case 2:
        answer = fibCycle(n);
        break;
    case 3:
        answer = fibArray(n);
        break;

    default:
        alert('You enter a wrong number');
    }
    document.write(n + ' numer of fibonacci is ' + answer + '<br>');
    work = confirm('Want to continue?');
}
