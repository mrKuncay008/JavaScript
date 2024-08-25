const userOne = {
    username: 'masjon',
    age: 20,
    address: 'Jakarta'
};

const userTwo = {           // Metode Variable Biasa
    username: 'maspren',
    age: 22,
    address: 'Tangerang'
};

const userThree = {
    username: 'lia',
    age: 24,
    address: 'Tangerang'
};

const userFour = {
    username: 'Aisma Meo',
    age: 23,
    address: 'Cikokol'
};

const VarObject = [userOne, userTwo, userThree, userFour];


const Users =  // Metode array object
[
    {
        username: 'masjon',
        age: 20,
        address: 'Jakarta'
    },

    {
        username: 'maspren',
        age: 22,
        address: 'Tangerang'
    },

    {
        username: 'lia',
        age: 24,
        address: 'Tangerang'
    },

    {
        username: 'Aisma Meo',
        age: 23,
        address: 'Cikokol'
    }
];


for (let a = 0; a < VarObject.length; a++) {
    
    console.log(`${a + 1}. username: ${VarObject[a].username} || Age: ${VarObject[a].age}`);
}

console.log("\n");

Users.forEach((user, i) => {
    
    console.log(`${i + 1}. username: ${user.username} || Age: ${user.age}`);
});

