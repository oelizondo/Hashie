function Hashie(mod) {
  this.arr   = [];
  this.mod   = mod;
  this.count = 0;
  this.keyChain = []
}

Hashie.prototype.genKey = function genKey(num) {
  return num % this.mod;
}

Hashie.prototype.getCount = function getCount() {
  return this.count;
}

Hashie.prototype.getHash = function getHash() {
  return this.arr;
}

Hashie.prototype.getKeyChain = function getKeyChain() {
  return this.keyChain;
}

Hashie.prototype.print = function print() {
  return this.arr.forEach(function(array){
    console.log(array);
  });
}

Hashie.prototype.add = function add(num) {
  var key = this.genKey(Math.floor(num));
  if (this.arr[key] == null) {
    this.arr[key] = [];
    this.arr[key].push(num);
  } 
  else {
    this.arr[key].push(num);
  }
  this.keyChain.push(key)
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
  var key = this.genKey(num);
  if(this.arr[key] == null) {
    return false;
  }
  else {
    for(var i = 0; i < this.arr[key].length; i++)
      if(this.arr[key][i] == num)
        return true;
  }
  return false;
}

Hashie.prototype.drawer = function drawer(drawerNumber) {
  return this.arr[this.keyChain[drawerNumber]];
}

module.exports = Hashie;