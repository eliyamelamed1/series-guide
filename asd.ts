const a = { rating: 1 };
const c = { rating: 1.5 };
const b = { rating: 3 };
const d = { rating: 2 };
const arr = [a, b, c, d];

function compare(a, b) {
    if (a.rating < b.rating) return 1;
    if (a.rating > b.rating) return -1;
    return 0;
}
arr.sort(compare);

console.log(arr);
