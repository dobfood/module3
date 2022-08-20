async function onMyBirthDayAsync(isKayoSick){
    if(!isKayoSick) return 2
    throw new Error("Sad")
}
async function doSomethingAsync(){
    try{
        let result = await onMyBirthDayAsync(true)
        console.log(`I have ${result} cake`)
    }
    catch(error){
        console.log(error.message)
    }
    finally {
        console.log("Party")
    }
}
doSomethingAsync()