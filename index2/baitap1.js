async function getSum(arr){
    if(arr instanceof Array){
        let sum =0;
        for(let i=0 ;i<arr.length;i++){
            sum +=arr[i]
        }
        return sum
    }
    throw new Error("Loag")
}
async function f(){
    try{
        let result = await getSum([1,45,5,67,3])
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
f();