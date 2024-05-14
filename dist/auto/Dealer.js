"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
class Dealer {
    name;
    currency;
    allCars;
    soldCars;
    constructor(name, currency) {
        this.currency = currency;
        this.name = name;
        this.allCars = [];
        this.soldCars = [];
        console.log(`Hi, my name is ${name}!`);
    }
    formatedPrice(price) {
        return price.toLocaleString('de-DE', {
            style: 'currency',
            currency: this.currency
        });
    }
    getCar(model, price) {
        this.allCars.push({ model, price });
        return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
    }
    carList() {
        let result = [`${this.name}\'s car dealership:`];
        for (let i = 0; i < this.allCars.length; i++) {
            const car = this.allCars[i];
            const price = this.formatedPrice(car.price);
            const ending = i < this.allCars.length - 1 ? ';' : '.';
            result.push(`${i + 1}) ${car.model}: ${price}${ending}`);
        }
        const count = Math.max(...result.map(row => row.length));
        result.splice(1, 0, '='.repeat(count));
        return result.join('\r\n');
    }
    changeCarPrice(id, newPrice) {
        if (id < 1) {
            return 'ERROR: id is too low.';
        }
        if (id > this.allCars.length) {
            return 'ERROR: id is too big.';
        }
        const car = this.allCars[id - 1];
        car.price = newPrice;
        return `New ${car.model} price is ${this.formatedPrice(newPrice)}.`;
    }
    sellCar(id) {
        const carId = id - 1;
        const car = this.allCars[carId];
        if (id < 1 || id > this.allCars.length) {
            return 'SORRY! There is no such car for sale :(';
        }
        this.soldCars.push(car);
        this.allCars.splice(carId, 1);
        return `Wow! ${car.model} sold for ${this.formatedPrice(car.price)}`;
    }
    fortune() {
        let countSoldCars = 0;
        let total = 0;
        for (let i = 0; i < this.soldCars.length; i++) {
            const sold = this.soldCars[i];
            total += sold.price;
            countSoldCars++;
        }
        return `${this.name} has sold ${countSoldCars} cars for total of ${this.formatedPrice(total)}`;
    }
}
exports.Dealer = Dealer;
