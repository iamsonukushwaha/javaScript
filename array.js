var arr = new Array(5);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

var i;

for(i = 0; i < arr.length; i++) {
    document.write(arr[i]);
    document.write("<br/>");
}



let cities = ["agra", "mathura", "patna", "lucknow", "pune"]

console.log(cities);


let [first,,,, fifth] = ["agra", "mathura", "patna", "lucknow", "pune"] //array destructing

console.log(first);
console.log(fifth);


console.log(cities.includes("agra"));
console.log(cities.includes("delhi"));


