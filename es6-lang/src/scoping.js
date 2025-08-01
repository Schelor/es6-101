{
  console.log(`
        ************** Scoping examples **************

                === Block-Scoped Variables ===
        `);
    
    let a = new Array('a', 'b', 'c');
    let b = [1,2,3];

    // 多种遍历数组
    console.log("for循环遍历");
    for(let i = 0; i < a.length; i++) {
        console.log(`Value a[${i}]`, a[i]);
    }
    
    console.log("for..of 循环遍历");
    for (const i of a) {
        console.log("Valuei", i);
    }

    console.log("foreach循环遍历");
    const fruits = ['苹果', '香蕉', '橙子', '葡萄', '西瓜'];
    fruits.forEach((element, index) => {
        console.log(`索引: ${index} : Value: ${element}`)
    });

    console.log("map遍历,返回新数组");
    const fruiteLens = fruits.map((element, index) => {
        console.log(`索引: ${index} : Value: ${element}`)
        return element.length;
    });
    console.log("返回新数组:", fruiteLens);

    let callbacks = [];
    for(let i=0; i<2;i++) {
        callbacks[i] = function() {
            return i*2;
        }
    }
      console.log(`Compare callback[0] === 0:`, callbacks[0]() === 0);
}
