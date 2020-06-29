function getMsg(callback) {
    setTimeout(function(){
        callback({
            msg: 'hello world'
        })
    },2000)
}

getMsg(function(data){
    console.log(data);
    
})

