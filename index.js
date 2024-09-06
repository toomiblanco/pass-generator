const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.getElementById('generatePasswordBtn')
let passwordPlaceholder1 = document.getElementById('passwordPlaceholder1')
let passwordPlaceholder2 = document.getElementById('passwordPlaceholder2')

button.addEventListener('click', () => {
   passwordPlaceholder1.textContent = ""
   passwordPlaceholder2.textContent = ""
    
    for(let i = 0;i<15;i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        passwordPlaceholder1.textContent += characters[randomIndex]
        
        let randomIndexTwo = Math.floor(Math.random()*characters.length)
        passwordPlaceholder2.textContent += characters[randomIndexTwo]
        
        
    }
    
    
    
    
})