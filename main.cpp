#include <iostream>

using namespace std;

#include "hash.h"

int main () {

  Hash myHash;
  //displays 0
  cout << myHash.getCounter() << endl;
  myHash.add(545);
  //displays 1
  cout << myHash.getCounter() << endl;
  return 0;
}