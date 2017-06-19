/**
 * Created by oleg on 27.05.17.
 */

var runner = {sunday: 10, monday: 15, tuesday: 5, wednesday: 3, thursday: 2, friday: 8, satarday: 6};
var count = 0;
var n = runner["sunday"];

for (var man in runner) {
    count += runner[man];
    if (runner[man] > n) {
        n = runner[man];
    }

}


console.log("max: " + n + "\nall: " + count);
