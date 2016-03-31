var Hashie = require('./src/hash.js');
var hash = new Hashie(10);

hash.add(45);
hash.add(123);
hash.add(121);
hash.add(500);
console.log(hash.find(1));
hash.print();