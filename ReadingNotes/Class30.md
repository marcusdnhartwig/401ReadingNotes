# CLASS 30 Implementation: Hash Tables

*All notes taken from reading material*

## CodeFellows - Hashtables

**Hash** - A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index of the array.

**Buckets** - A bucket is what is contained in each index of the array of the hashtable. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.

**Collisions** - A collision is what happens when more than one key gets hashed to the same location of the hashtable.

USED FOR-->

1. Hold unique values

2. Dictionary

3. Library

Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. 

Arrays actually have fast access. If we know the index of the information we want we can access that information in O(1) time. The reason why searching for a piece of data in a collection is O(N) isn’t because the array is slow, it’s just that we have to look through all N things in the collection.

Hash maps take advantage of an array’s O(1) read access. Instead of adding elements to an array from beginning to end, a hash map uses a “hash function” to place each item at a precise index location, based off it’s key.

A collision occurs when more than one key hashes to the same index in an array. As mentioned earlier, a “perfect hash” will never have any collisions. To put this into perspective, the worst possible hash is one that hashes every single key to the same exact index of an array. The more keys you have hashed to a specific index, the more key/value pair combos you can potentially have.

Hash Maps can have any number of buckets. If a hash map has only a few buckets it will be densely full and have many collisions. If a hash map has more buckets it will be more sparsely populated, there will be less collisions, but there may be a lot of extra empty space.


## Basics of Hash Tables

Hashing is a technique that is used to uniquely identify a specific object from a group of similar objects. Some examples of how hashing is used in our lives include:

  - In universities, each student is assigned a unique roll number that can be used to retrieve information about them.

  - In libraries, each book is assigned a unique number that can be used to determine information about the book, such as its exact position in the library or the users it has been issued to etc.

In hashing, large keys are converted into small keys by using hash functions. The values are then stored in a data structure called hash table. 

he idea of hashing is to distribute entries (key/value pairs) uniformly across an array. Each element is assigned a key (converted key). By using that key you can access the element in O(1) time.

Hashing is implemented in two steps:

  1. An element is converted into an integer by using a hash function. This element can be used as an index to store the original element, which falls into the hash table.

  2. The element is stored in the hash table where it can be quickly retrieved using hashed key.

**hash = hashfunc(key**)

**index = hash % array_size**

A hash function is any function that can be used to map a data set of an arbitrary size to a data set of a fixed size, which falls into the hash table. The values returned by a hash function are called hash values, hash codes, hash sums, or simply hashes.

To achieve a good hashing mechanism, It is important to have a good hash function with the following basic requirements:

    a. Easy to compute: It should be easy to compute and must not become an algorithm in itself.

    b. Uniform distribution: It should provide a uniform distribution across the hash table and should not result in clustering.

    c. Less collisions: Collisions occur when pairs of elements are mapped to the same hash value. These should be avoided.

*Note: Irrespective of how good a hash function is, collisions are bound to occur. Therefore, to maintain the performance of a hash table, it is important to manage collisions through various collision resolution techniques.*


## Hash table - Wiki

In computing, a hash table, also known as hash map or dictionary, is a data structure that implements a set abstract data type, a structure that can map keys to values. 

A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.

During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions are typically accommodated in some way.
