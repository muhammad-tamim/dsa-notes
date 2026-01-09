let n = 11245;

while (n > 0) {
    let digit = n % 10;
    console.log(digit)

    n = Math.floor(n / 10)
}

/*
5
4
2
1
1
*/