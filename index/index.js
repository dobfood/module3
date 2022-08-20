function onMyBirthday(isKayoSik){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!isKayoSik){
                resolve(2)
            }
            else{
                console.log("I am sad")
                reject()
            }
        },1000)
    })
}
onMyBirthday(true)
    .then((result)=>{
        console.log(`dive ${result} dsd`)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("DI ve")
})
// onMyBirthday(false)
//     .then((result)=>{
//         console.log(`sdisajd$${result}`)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//     console.log("DI ve")
// })

