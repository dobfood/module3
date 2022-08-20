function buyoto(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 100000) {
                resolve(2)
            } else {
                reject(new Error(" khong du tien mua roi"));
            }
        }, 2000);
    });
}
buyoto(4)
    .then((result) => {
        console.log(`Mua duoc ${result} xe roi `);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("DI VE")
    })