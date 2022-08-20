function time(number) {
    return new Promise((resolve) =>
        setTimeout(resolve, number))
}

async function slowdown() {
        let input = document.getElementById("num");
        // let div = document.getElementById("time-countdown")
    while (input >= 0) {

        input--;
        await time(2000)
    }
    return "Finsh"
}

// let counter = slowdown()
// counter.then((result)=>{
//     document.getElementById('num').innerHTML=result
// })
// let counter = slowdown()
// counter.then((result) => {
//     document.getElementById('time-countdown').innerHTML = result
// })