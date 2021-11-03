let films = [
    new Movie('Great Circle', 1992, 'by Maggie Shipstead', 1000, 200),
    new Movie('Punch Me Up to the Gods: A Memoir', 1998, 'by Brian Broome', 2000, 500),
]; 
for(let a of films){
    console.log(`${a.getIntroduction()}, ${a.getProfit()} is income`);
};











