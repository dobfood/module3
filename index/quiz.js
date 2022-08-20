// function messega(){
//     let result = "firts"
//     return new Promise((resolve,result)=>{
//         setTimeout(()=>resolve("done"),3000)
//     })
// }
// messega().then(result=>{
//     console.log(result)
// })
// function  gree(name,callback){
//     console.log("hello"+ " "+name);
//     callback()
// }
// function process(){
//     console.log( "An");
// }
// gree('Fuck',process)
function test(data) {
    Promise.resolve('sus')
        .then(data => {
            return data.toUpperCase()
        })
        .then(data => {
            console.log(data)
        })
}