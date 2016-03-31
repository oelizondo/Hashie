function Hashie(mod) {
  this.arr   = [];
  this.mod   = mod;
  this.count = 0;
}

Hashie.prototype.genKey = function genKey(num) {
  return num % this.mod;
}

Hashie.prototype.getCount = function getCount() {
  return this.count;
}

Hashie.prototype.add = function add(num) {
  var key = this.genKey(num);
  if (this.arr[key] == null) {
    this.arr[key] = [];
    this.arr[key].push(num);
  } 
  else {
    this.arr[key].push(num);
  }
  this.count++;
  return true;
}

Hashie.prototype.erase = function erase (num) {
  var key = this.genKey(num);
  this.arr[key].splice(this.arr[key].indexOf(num), 1);
  this.count--;
  return true;
}

Hashie.prototype.dump = function dump() {
  this.count = 0;
  this.arr = [];
  return true;
}

Hashie.prototype.find = function find(num) {
  var key = this.genKey(number);
  return this.arr[key] == number ? true : false
}

Hashie.prototype.print = function() {
  return this.arr.forEach(function(number){
    console.log(number);
  });
}

module.exports = Hashie;