var number = 15;

for (let i=0; i<=number; i++){
    
    if (i%3 === 0){
        document.write(i + ' ' + 'Fizz' + '<br>');
    }  
    if (i%5 === 0){
        document.write(i + ' ' + 'Buzz' + '<br>');
    }
    if (i%15 === 0){
        document.write(i + ' ' + 'FizzBuzz' + '<br>');
    }  

}