let course = new Map();

course.set("react", {description: "ui"});

course.set("jest", {description: "testing"});

console.log(course);
console.log(course.react); // map do not work like array
console.log(course.get("react"));



let details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"]}],
    ["items", [1,2,3]]
]);

console.log(details);
console.log(details.size);

details.forEach(function(item){
    console.log(item);
});
