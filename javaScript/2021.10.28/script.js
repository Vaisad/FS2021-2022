



function Car (name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
};
Book.prototype.getAuthorName = function(){
    return `${this.name} ${this.author}`;
}
Book.prototype.getYear = function(){
    return this.year;
}
Book.prototype.getAge = function(){
    return (new Date).getFullYear() - this.year;
}

let books = [
    new Book('Great Circle', ' by Maggie Shipstead', 1982),
    new Book('Punch Me Up to the Gods: A Memoir', ' by Brian Broome', 1992),
    new Book('Eyes That Kiss in the Corners', ' by Joanna Ho', 2002),
]; 
for(let a of books){
    console.log(`${a.getAuthorName()} - ${a.getAge()} years ago.`);
};











