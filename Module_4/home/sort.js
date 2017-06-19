var hold;
var array = [12, 4, 3];
var array2 = [];

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
        if (array[j - 1] > array[j]) {
            hold = array[j - 1];
            array[j - 1] = array[j];
            array[j] = hold;

        }

    }
}
array2.push(array);



console.log(array2);
