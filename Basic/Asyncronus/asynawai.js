function findName(){
    return new Promise ( resolve => {
        setTimeout(()=>{
            console.log("find name");
            resolve();
        },3000)
    });
}

function sortName(a, b){
    return new Promise ( resolve => {
        setTimeout(()=>{
            console.log("sort name");
            const hasilShort = a * b;
            resolve(hasilShort);
        },3000)
    });
}

function manipulatingName(){
    return new Promise ( reject => {
        setTimeout(()=>{
            console.log("manipulating name");
            reject();
        },2000)
    });
}

function changingName(a, b){
    return new Promise ( resolve => {
        setTimeout(()=>{
            console.log("Penjumlahan");
             const Hasil = a + b;
            resolve(Hasil);
        },1000)
    });
}

async function nameChange (){
    
    try{
    const resultFind = await findName();

    const hasilShort = await sortName(2, 3);
    // console.log(hasilShort);
    
    const resultManipulate = await manipulatingName();

    const Hasil = await changingName(hasilShort, 10);
    console.log(Hasil);    
    }
    catch(error){
        console.log(error);
    }
}
nameChange()
