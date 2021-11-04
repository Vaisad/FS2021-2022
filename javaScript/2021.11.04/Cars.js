
class Cars {       
    constructor (make, model, year){
 this.make = make;
 this.model = model;
 this.year = year;
};
getIntroduction(){
 return `${this.make} ${this.model}`;
};
getAge(){
 return (new Date).getFullYear() - this.year;;
}
}; 