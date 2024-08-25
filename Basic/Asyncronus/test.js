function changingAddress(data) {
        setTimeout(() => {
            if ( data == "number") {
                console.log("data bukan string");
              
            } else if (data == undefined) {
                console.log("data kosong");
              
            } else {
                console.log("alamat sudah di ubah");
                
            }
        }, 2000);
    };

async function addressCheck(addressProp) {
    try {
        const resultChanging = await changingAddress(addressProp); 
        console.log("ini result changing ", resultChanging);
    } catch (error) {
        console.log("ini error address ", error);
    }
}

addressCheck(3344);
