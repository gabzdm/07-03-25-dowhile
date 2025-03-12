function contador() { //Função contador parentesess vazios pois esta passando sem parametros
    const tempo = new Date(); // constante nao muda. a variavel receberá Date - funcao do js de data
    
    //while (document.getElementById("cbxMarcarTempo").checked == true){

    let hora = tempo.getHours(); //let variavel temporaria - Recberá o metodo getHours (hora)
    let minuto = tempo.getMinutes(); //let variavel temporaria - Recberá o metodo getMinutes (minutos)
    let segundo = tempo.getSeconds(); //let variavel temporaria - Recberá o metodo getSeconds (segundos)
   
    if(document.getElementById("cbxMarcarTempo").checked == true){
        document.getElementById("div_tempo").innerText = hora + ":" + minuto + ":" + segundo; 
    }
    setInterval(contador, 1000); //Conta 1 segundo
    if(document.getElementById("cbxMarcarTempo").checked == false){
        document.getElementById("div_tempo").innerText = ""; 
        clearInterval();
    }
    //If - Condição, verifica se a caixa esta selecionada se == verdadeira, mostra o horario
    //If2 -  Condição, verifica se a caixa esta selecionada se == verdadeira, mostra o horario
    //document.body.innerText = hora; //Mosstra o valor na pagina dentro do bodyy no html
    //window.setTimeout(contador(), 1000);
}
document.getElementById("cbxMarcarTempo").addEventListener('click', () => {
    contador();
});
