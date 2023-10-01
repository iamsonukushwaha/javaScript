// sets > sets are collecion of values , each value should be unique


let books = new Set();


books.add("english")
books.add("hindi").add("maths")
books.add("english") // dulpicate not allowed, it will not show

books.delete("maths");
console.log(books);
console.log(books.size);

books.forEach(function(item) {
    console.log(item);
});

console.log("has maths", books.has("maths"));




