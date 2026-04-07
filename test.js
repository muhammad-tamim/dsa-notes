class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.capacity = size;
    }

    // Basic hash function
    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.capacity;
    }

    // set(key, value)
    set(key, value) {
        const index = this.hash(key);

        // Create bucket if not exists
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // 🔁 Collision handling:
        // Check if key already exists → update
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                console.log(`Updated: ${key} → ${value} at index ${index}`);
                return;
            }
        }

        // Otherwise insert new
        this.table[index].push([key, value]);
        console.log(`Inserted: ${key} → ${value} at index ${index}`);
    }

    // get(key)
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) {
            console.log(`Get: ${key} → not found`);
            return undefined;
        }

        for (let pair of bucket) {
            if (pair[0] === key) {
                console.log(`Get: ${key} → ${pair[1]}`);
                return pair[1];
            }
        }

        console.log(`Get: ${key} → not found`);
        return undefined;
    }

    // remove(key)
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) return;

        this.table[index] = bucket.filter(pair => {
            if (pair[0] === key) {
                console.log(`Removed: ${key}`);
                return false;
            }
            return true;
        });
    }

    // has(key)
    has(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) {
            console.log(`Has ${key}: false`);
            return false;
        }

        for (let pair of bucket) {
            if (pair[0] === key) {
                console.log(`Has ${key}: true`);
                return true;
            }
        }

        console.log(`Has ${key}: false`);
        return false;
    }

    // size
    size() {
        let count = 0;

        for (let bucket of this.table) {
            if (bucket) {
                count += bucket.length;
            }
        }

        console.log("Size:", count);
        return count;
    }

    // print full table
    print() {
        console.log("Table:", this.table);
    }
}

const ht = new HashTable();

ht.print(); // [ <10 empty items> ]

ht.set("name", "Tamim"); // Set: name → Tamim at index 7
ht.set("eman", "Collision Test"); // Inserted: eman → Collision Test at index 7
ht.set("age", 25); // Set: age → 25 at index 1

ht.print(); // [ <1 empty item>, 25, <5 empty items>, 'Tamim', <2 empty items> ]

ht.get("name"); // Get: name → Tamim
ht.get("age");  // Get: age → 25

ht.has("name"); // Has name: true
ht.has("city"); // Has city: true

ht.size(); // Size: 2

ht.remove("age"); // Removed: age

ht.print();

/*
[
  <1 empty item>,
  undefined,
  <5 empty items>,
  'Tamim',
  <2 empty items>
]
*/

ht.size(); // Size: 1