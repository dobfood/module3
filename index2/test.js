try{
    try{
        throw new Error("sd")
    }
    catch(ex){
        console.error('sdsd',ex.message)
    }
    finally {
        console.log('sds')
    }
}
catch(ex){
    console.error('exc',ex.message)

}