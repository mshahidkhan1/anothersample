let car = 'subaru';

console.log(car == 'subaru');
console.log(car == 'honda');
console.log(car === 'subaru');
console.log(car !== 'honda');
console.log(car.length > 0);
console.log(car.length < 5);
console.log(car.indexOf('sub') !== -1);
console.log(car.indexOf('su') === 0);
console.log(car.indexOf('baru') === car.length - 'baru'.length);
console.log(car.charAt(0) === 's');
