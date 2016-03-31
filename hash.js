module.exports = function Hashie(mod) {
  this.arr = [];
  this.mod = mod;

  this.genKey = function(num) {
    return num % this.mod;
  }

  this.add = function(num) {
    var key = this.genKey(num);
    this.arr[key] = num;
    return true;
  }

  this.find = function(number) {
    var key = this.genKey(number);
    return this.arr[key] == number ? true : false
  }

  this.print = function() {
    return this.arr.forEach(function(number){
      console.log(number);
    });
  }
}