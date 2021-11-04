let cars = [
    new Cars('Porsche', 'Cayenne', 2009),
    new Cars('Mercedes-Benz', 'GLE', 2020),
]; 

for(let a of cars){
    console.log(`${a.getIntroduction()} - ${a.getAge()} `);
};