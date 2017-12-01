// Shifting the values in the array
for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
}
array[array.length - 1] = 0;
console.log(array);