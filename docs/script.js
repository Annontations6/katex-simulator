var ft = 0; //1
var ftsec = 0; //2
var ftclick = 1; //3
var c1level = 0; //4
var c2level = 0; //5
var q1level = 0; //6
var q2level = 0; //7
var timespub = 0; //8
var timespent = 0; //9
var c1cost = 100; //10
var c2cost = 50000; //11
var q1cost = 50000; //11
const var_total = 9; // DO NOT MODIFY
var c1 = (level) => Math.sqrt(level * 2);
var c2 = (level) => Math.pow(2, level);
var q1 = (level) => Math.pow(3, level);
var q2 = (level) => Math.pow(Math.sqrt(timespent), level);

document.getElementById("click").onclick = () => {
    ft += ftclick * (c1(c1level) + 1) * c2(c2level) * q1(q1level) * q2(q2level);
    document.getElementById("ft").innerHTML = "\\(f(t) = " + ft + "\\)"
}

setInterval(() => {
    timespent += 0.2;
}, 10);