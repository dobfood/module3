function download(url){
    setTimeout(()=>{
        console.log(`downloading ${url}...`)
    },1000)
}
function process(picture){
    console.log(`processing ${picture}`)
}
let url = 'https://www.w3scholl.net/pic.jpg'
download(url,process)
