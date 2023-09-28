function fibon(x) {
    if(x < 1) 
        return 0;
    
    if (x === 2) 
        return 1;
    
    return fibon(x - 1) + fibon(x - 2);
}
for ( x = 1;  x <= 5; x++) {
    console.log(fibon(x) + ", ");
}