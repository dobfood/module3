async function getBignumber(arr){
    if(arr instanceof Array){
        let max = 0
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max){
                max = arr[i]

            }
        }
        return max
    }
    throw new Error("ec")
}
async function f(){
    try {
        let result = await getBignumber([4, 4, 5, 6, 7, 8, 3])
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
f()