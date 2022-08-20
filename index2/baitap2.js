async function getDivision(a,b){
    if(b!=0) return (a/b);
    return new Error("Match Error")

}
async function f(){
    try{
        let result = await getDivision(4,5)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
f()