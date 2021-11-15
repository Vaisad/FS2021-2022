let cars = [
    new Cars('Porsche', 'Cayenne', 2009),
    new Cars('Mercedes-Benz', 'GLE', 2020),
    
];

for (let a of cars) {
    console.log(`${a.getIntroduction()} - ${a.getAge()} `);
};

let motorcycles = [
    new Motorcycle('Renaldas geria tuborga', 'Skarbem', 2021, 2)
    
];

for (let motorcycle of motorcycles) {
    console.log(`${motorcycle.getIntroduction()} ${motorcycle.getAge()} ${motorcycle.getWheelsNumber()}`);
};

