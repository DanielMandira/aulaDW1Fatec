function escolher() {
    let heroi = document.getElementById("heroi").value;
    const heroisDC = [ "Superman", "Batman", "Flash", "Lanterna Verde", "Aquaman"];
    const heroisMarvel = [ "Thor", "Capitão America", "Pantera Negra", "Homem de Ferro", "Namor"];
    let resultado = "";
    if (heroisDC.includes(heroi)) {
        let h = prompt("Digite o nuero de repetições");
        for(n=1; n<=h; n++){

            resultado += "<p> O Heroi " + heroi + " é da DC! </p>";
        }
        document.getElementById("text").innerHTML = resultado;
        }
        else if(heroisMarvel.includes(heroi)){
            let h = prompt("Digite o nuero de repetições");
            for(n=1; n<=h; n++){
                resultado += "<p>O Heroi " + heroi + " é da Marvel!</p>";
            }
            document.getElementById("text").innerHTML = resultado;
        }
        else{
            document.getElementById("text").innerHTML = "Heroi Inexistente!";
            document.getElementById("text").style.color="red";
    }
}