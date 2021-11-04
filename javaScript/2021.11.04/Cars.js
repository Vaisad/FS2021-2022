
class Cars {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	};
	getIntroduction() {
		return `${this.make} ${this.model}`;
	};
	getAge() {
		let age = (new Date).getFullYear() - this.year;
		return age <= 10 ? '10 years or later' : '11 years or older';
	}
};