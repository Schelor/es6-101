console.log(`
      ************** Arrow functions examples **************

                    === Expression Bodies ===
      `);

const array = [1,2,3,4,5,6];
let odd = array.map(v => v+1);
let pair = array.map(v => ({
    even: v,
    odd: v+1
}));      

console.log(`odd`, JSON.stringify(odd));
console.log(`pair`, JSON.stringify(pair));

console.log(`
                      === Lexical this ===
              `);

let myfunc = {
    nums: [1,2,3,4,5,6,7,8,5],
    fives:[],
    getFives: function() {
        this.nums.forEach((v) => {
            if (v % 5 == 0) {
                this.fives.push(v);
            }
        })
    }
}   

myfunc.getFives();
console.log(`myfunc.fives:`, myfunc.fives);