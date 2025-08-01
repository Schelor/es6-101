    console.log(`
      ************** Destructuring Assignment examples **************

                          === Array Matching ===
                      `);

 const list = [1, 2, 3];
 let [a, , b] = list;
 
 console.log(`Value a:`, a);
 console.log(`Value b:`, b);

 [b, a] = [a, b]
  console.log(`Value a:`, a);
 console.log(`Value b:`, b);


console.log(`
                === Object Matching, Shorthand Notation ===
              `);
 function getASTNode() {
    return {
        op: 1,
        lhs: 2,
        rhs: 3
    }
 }



 let {
    op, lhs, rhs
 } = getASTNode();

 console.log(`Value op:`, op);
 console.log(`Value lhs:`, lhs);
 console.log(`Value rhs:`, rhs);
 console.log(`
                 === Object Matching, Deep Matching ===
              `);
    function getASTNode2() {
        return {
            op: 1,
            lhs: {
                op: 2
            },
            rhs: 3
        };
    };

    var {
        op: x,
        lhs: {
            op: y
        },
        rhs: z
    } = getASTNode2();

    console.log(`Value x:`, x);
    console.log(`Value y:`, y);
    console.log(`Value z:`, z);


        console.log(`
            === Object And Array Matching, Default Values ===
              `);


              