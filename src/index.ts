console.log('Labas rytas, Lietuva!');

let name = 'Jonas';
console.log(name);


name = '5';
console.log(name);

const lastname: string = 'Jonaitis';
const age: number = 99;
const isMarried: boolean = true;

console.log(lastname, age, isMarried)

const marks = [10, 2, 8, 4, 6];
const x = marks.join('');

console.log(x);


const students: string[] = ['Jonas', 'Maryte'];
students.push('Petras', 'ona');


function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(7, 5));
//sum('labas', 5); 'labas5'


function diff(a: number, b: number, covertToString: boolean): string | number {
    if (covertToString === true) {
        return '' + (a + b);
    } else {
        return a + b;
    }
}


const c = diff(7, 5, true);
const d = diff(7, 5, false);
console.log(c, d)


if (typeof c === 'string') {
    console.log('C skaitmenu turi:', c.length)
}
if (typeof d === 'string') {
    console.log('C skaitmenu turi:', d.length)
}


