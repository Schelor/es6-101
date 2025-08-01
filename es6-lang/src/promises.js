/***
 * 总体玩法

pending（等待、处理中）—> Resolve(完成、fullFilled)
              —> Rejected(拒绝、失败)
var p1=new Promise(function(resolve,reject){
    //resolve  成功了
    //reject    失败了
        });

var p1=new Promise(function(resolve,reject){
    if(异步处理成功了){
        resolve(成功数据) 作为返回值给then
    }else{
        reject(失败原因)
    }
        });

p1.then(成功(resolve),失败(reject))    √
--------------------------------------------
p1.catch——用来捕获错误

 */

console.log(`
        ************** Promises examples **************

                     === Promise Usage ===
    `);
{
    function msgAfterTimeout(msg, who, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>(resolve(`${msg} Hello ${who}`)), timeout);
        });
    }

    msgAfterTimeout('', 'Foo', 1000)
    .then((msg)=> msgAfterTimeout(msg, 'Bar', 2000))
    .then((msg) => console.log(`Response promise after 3000ms:`, msg));
}

console.log(`
                  === Promise Combination ===
    `);

{
    let fetchPromised = (name, timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(`Hi ${name}`), timeout);
        });
    }
    Promise.all([
            fetchPromised('Foo', 1000),
            fetchPromised('Bar', 500),
            fetchPromised('Baz', 200)
        ]).then((data) => {
            let [foo, bar, baz] = data;
            console.log(`Response all promises: foo=${foo} bar=${bar} baz=${baz}`);
        }, (err) => {
            console.log(`Error: ${err}`);
        });
}