function calcular() {
let agua = document.getElementById("agua").value;
let resultado = document.getElementById("resultado");

if(agua <= 1000){
resultado.innerHTML = "✅ Consumo sustentável!";
}else{
resultado.innerHTML = "⚠️ Consumo elevado. Tente economizar água.";
}
}
