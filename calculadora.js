function inserir(x){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + x;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function apaga(){
    let result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0 , result.length -1)
}

function resultado(){
    let resulta = document.getElementById('resultado').innerHTML;
    if(resulta){
        document.getElementById('resultado').innerHTML = eval(resulta);
    }
    else{
        document.getElementById('resultado').innerHTML = "nada inserido!"
    }
}