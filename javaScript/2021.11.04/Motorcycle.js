class Motorcycle extends Cars {
    constructor(make, model, year, wheels) {
        super(make, model, year);
        this.wheels = wheels;
    };


    getWheelsNumber() {
        if (this.wheels === 3) {
            return 'java turi 3 ratus';
        } else if (this.wheels === 2) {
            return 'java turi 2 ratus';
        }

        return 'daug arba be ratu';
    }
};

