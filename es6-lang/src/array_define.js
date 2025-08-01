// 演示数组定义有几种方式

// 1. 使用数组字面量（最常用）
const array1 = ['苹果', '香蕉', '李子', '葡萄'];
// 2. 使用Array构造函数
const array2 = new Array(1, 2, 3, 4, 5);

// 3. 使用Array构造函数+数组长度
const array3 = new Array(10);

// 4.使用Array.of(ES6语法)
const array4 = Array.of(1,2,3,4,5,6)


// 5.使用Array.from()方法（ES6) 从类数组对象或可迭代对象创建数组 数组赋值
const array5 = Array.from(array4)

// 6. 使用...展开运算符 复制数组
const original = [1,2,4];
const array6 = [...original];

