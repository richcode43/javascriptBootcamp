function lottery(a, b, c) {
    let ab = a + b;
    let bc = b + c;
    let ac = a + c;

    if (ab == 10 || bc == 10 || ac == 10) {
        return 10;

    } else if (ab == bc + 10 || ab == ac + 10) {
        return 5;

    }

    return 0;
}
console.log(lottery(2, 8, 6))