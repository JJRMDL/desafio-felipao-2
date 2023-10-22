let result = player(100, 15)

function player(victory,defeat) {
    let resultPlayer = victory - defeat

    if (resultPlayer <= 10){
        console.log("O Herói tem um saldo de: " + resultPlayer + " Victory, e está no nível de: Ferro" )
    }
    else if (resultPlayer <= 20){
        console.log("O Herói tem um saldo de: " + resultPlayer + " Victory, e está no nível de: Bronze")
    }
    else if (resultPlayer <= 50){
        console.log("O Herói tem um saldo de: " + resultPlayer + " Victory, e está no nível de: Prata")
    }
    else if (resultPlayer <= 80){
        console.log("O Herói tem um saldo de: " + resultPlayer + " Victory, e está no nível de: Ouro")
    }
    else if (resultPlayer <= 90){
        console.log("O Herói tem um saldo de: " + resultPlayer + " Victory, e está no nível de: Diamante")
    }
    else if (resultPlayer <= 100){
        console.log("O Herói tem um saldo de: " + resultPlayer + " Victory, e está no nível de: Lendário")
    }
    else  
        console.log("O Herói tem um saldo de: " + resultPlayer + " Victory, e está no nível de: Imortal")
}

