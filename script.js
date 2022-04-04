//Botões iniciais

const newGameButton = document.querySelector(".newGame")
const purchaseButton = document.querySelector(".purchase")
const stopButton = document.querySelector(".stop")

const textArea = document.querySelector(".textArea")

//Baralho

const suitCards = ["Paus","Copas","Espada","Ouro"]
const valueCards = ["Rei",'Dama', 'Valete', 'Dez', 'Nove', 'Oito', 'Sete', 'Seis', 'Cinco', 'Quatro', 'Três', 'Dois', 'Ás']




// Iniciar o jogo
newGameButton.addEventListener ("click", () =>{
    newGameButton.style.display = "none"
    stopButton.style.display = "inline"
    purchaseButton.style.display = "inline"

    initalDeck()

})

//comprar carta

purchaseButton.addEventListener("click",  () => {
    ramdomCards()
})

//parar de comprar carta

stopButton.addEventListener("click", () =>{

})

// Setar o deck inicial
function initalDeck (){    
    for (i = 0; i < 2; i++){
        
        ramdomCards ()
        
    }
}

//Gerar a carta de forma aleatória
function ramdomCards (){
    const suit = suitCards[Math.floor(Math.random() * suitCards.length)]
    const value = valueCards[Math.floor(Math.random() * valueCards.length)] 
    
    console.log(`Sua carta é ${value} de ${suit}`)

}
