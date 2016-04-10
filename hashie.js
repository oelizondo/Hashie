function Hashie(userKey) {
  this.hashTable      = [];
  this.userKey        = userKey;
  this.elementCounter = 0;
  this.keyChain       = []
}

//Generates a key to store data in the HashTable.
Hashie.prototype.generateKey = function generateKey(number) {
  return number % this.userKey;
}

//Returns the instantiated amount of elements in a HashTable.
Hashie.prototype.getCounter = function getCounter() {
  return this.elementCounter;
}

//Returns the whole HashTable.
Hashie.prototype.getHashTable = function getHashTable() {
  return this.hashTable;
}

//Returns the keyChain of used keys generated in Add, Erase and Find methods.
Hashie.prototype.getKeyChain = function getKeyChain() {
  return this.keyChain;
}

//Console logs the HashTable.
Hashie.prototype.print = function print() {
  return this.hashTable.forEach(function(hashDrawer){
    console.log(hashDrawer);
  });
}

//Adds an elements to the HashTable
Hashie.prototype.add = function add(number) {
  var key = this.generateKey(Math.floor(number));

  //If the HashTable in the position of the key generated
  //doesn't exist, a new array is instantiated.
  if (this.hashTable[key] == null) {
    this.hashTable[key] = [];
    this.hashTable[key].push(number);
  } 
  else { //If it's not null, then the element is just pushed
    this.hashTable[key].push(number);
  }

  this.keyChain.push(key)
  this.elementCounter++;
  return true;
}

//Erases a desired element from the HashTable
Hashie.prototype.erase = function erase(number) {
  var key = this.generateKey(number);
  //Splices the hash table in the position the Key is generated
  //Only 1 space because we can only erase one element with this method
  this.hashTable[key].splice(this.hashTable[key].indexOf(number), 1); 
  this.elementCounter--;
  return true;
}

//Erases resets the HashTable
Hashie.prototype.dump = function dump() {
  this.elementCounter = 0;
  this.hashTable = [];
  return true;
}

//Finds an element in the HashTable
Hashie.prototype.find = function find(number) {
  var key = this.generateKey(number);
  //If the number doesn't generate a used Key
  if(this.hashTable[key] == null) {
    return false;
  }
  else { //else, looks at the desires drawer linearly (todo: improve the search method in drawers)
    for(var i = 0; i < this.hashTable[key].length; i++)
      if(this.hashTable[key][i] == number)
        return true;
  }

  return false;
}

//Returns a single drawer of the HashTable with its elements
Hashie.prototype.drawer = function drawer(drawerNumber) {
  return this.hashTable[this.keyChain[drawerNumber]];
}

//Erases a whole drawer with its elements
// Hashi.prototype.eraseDrawer = function eraseDrawer(drawerNumber) {
//   var drawer = this.hashTable[this.keyChain[drawerNumber]];
//   drawer = [];
// }

module.exports = Hashie;