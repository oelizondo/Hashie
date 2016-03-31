## Hashie

Hashie is a small library that implements a hash data structure.

### What it does

For every element you want to insert (e.g. 543) a new key is generated with a custom modulo (on creation). So the key for 543 is 3. Hashie will push in the position 3 and insert the number 543 there.

### Colissions

Since it's a vector, colissions are handled with a simple push method. so the key 3 can have multiple values (543, 643, 943, 743, etc).

### Optimization

Hash is desgined for large amounts of data that avoid many colissions (e.g. 01192543 with a key of % 100 to be 43). For a set of 150_000 ids, there'd only be around 50 colissions (which is good).