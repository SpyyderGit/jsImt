/**
 * Created by oleg on 08.06.17.
 */
var curr = '[{"ccy":"EUR","base_ccy":"UAH","buy":"29.39461","sale":"29.54840"},\
    {"ccy":"RUR","base_ccy":"UAH","buy":"0.46309","sale":"0.46311"},\
    {"ccy":"USD","base_ccy":"UAH","buy":"26.20541","sale":"26.24658"},\
    {"ccy":"BTC","base_ccy":"USD","buy":"2605.8191","sale":"2880.1159"}]';


var obj = JSON.parse(curr);
for (var p in obj) {
    console.log(obj[p].ccy);
}



