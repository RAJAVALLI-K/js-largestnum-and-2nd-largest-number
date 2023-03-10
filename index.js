
let arr = [10, -3, 2, 7, 10, -11], a = [0], b = 0;
for (let i = 1; i < arr.length; i++) {
    if (a < arr[i]) {
        a = arr[i];
    }

}
console.log("Largest number:" + a);
for (let j = 0; j < arr.length; j++) {
    if (b < arr[j] && arr[j] != a) {
        b = arr[j];
    }
}
console.log("second Largest number:" + b);