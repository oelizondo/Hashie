#include <vector>

class Hash {
  public:
    Hash();
    bool add(int data);
    int getCounter();
    bool search(int data);
    //bool delete(int data);
    
  private:
    int genKey(int data);
    int index_search(int data);
    vector<vector<int> > data;
    int counter;
};

Hash::Hash() {
  this -> counter = 0;
}

int Hash::getCounter() {
  return this->counter;
}

int Hash::genKey(int data) {
  return data % 100;
}

bool Hash::add(int data) {
  int key = genKey(data);
  this->data[key].push_back(data);
  counter++;
  return true;
}

bool Hash::search(int data) {
  int key = genKey(data);
  vector<int> keyed_vector = this->data[key];

  for (int i = 0; i < keyed_vector.size(); i++)
    if (keyed_vector[i] == data)
      return true;

  return false;
}

int Hash::index_search(int data) {
  int key = genKey(data);
  vector<int> keyed_vector = this->data[key];

  for (int i = 0; i < keyed_vector.size(); i++)
    if (keyed_vector[i] == data)
      return i;

  return -1;
}