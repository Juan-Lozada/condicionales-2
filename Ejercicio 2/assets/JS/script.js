
let verificar = document.querySelector('#verificar');

verificar.addEventListener("click", function(){
    let valor1 = document.querySelector('#input-1').value;
    let valor2 = document.querySelector('#input-2').value;
    let valor3 = document.querySelector('#input-3').value;
    let total = Number(valor1) + Number (valor2) + Number (valor3);
    let info = document.querySelector('#info'); 
    let cantidad = document.querySelector("#cantidad");
    
    if (total <= 10){
        let stickers = `llevas ${total} stickers`
        console.log(stickers)
        info.innerHTML = "Puedes llevar los Stickers."
        cantidad.innerText = stickers;
        cantidad.style.color = "green";
        
    }
    else{
        info.innerHTML = "No puedes llevar mas de 10 stickers."
        info.style.color = 'red'
    }
});
