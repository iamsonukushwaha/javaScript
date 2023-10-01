const id = Symbol();


const courseInfo = {
    title: "JavaScript",
    topics: [
        "strings",
        "arrays",
        "objects"
    ],
    id: "js-course"
};

courseInfo[id] = 736;

console.log(courseInfo);
