function Dufan(age = 0) {
    return new Promise((resolve, reject) => {

        console.log("Loading ... !");
        setTimeout(() => {
            console.log("Scan Your Age :v !!...\n");
        }, 2000);
        
        setTimeout(() => {
            if (age < 16) {
                reject("ERROR: Age not enough !...");
            }
            
            resolve("Succeess !... Welcome to Dufan :)")
        }, 3000);
    });
}

const main = async () => {
    try {
        const hasil = await Dufan(22);
        console.log(hasil);

    } catch (error) {
        console.log(error);
    }
};
main();