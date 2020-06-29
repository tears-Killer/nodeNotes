console.log('代码开始执行');

setTimeout(() => {
    console.log('2s后执行的代码');
}, 2000)
setTimeout(() => {
    console.log('0s后执行的代码');
})

console.log('代码执行完毕');


