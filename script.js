const characters =["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`"
    ,"!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"];

let slot1 = document.getElementById("password1");
let slot2 = document.getElementById("password2");
let genBtn = document.getElementById("generate");


function generate(){
    let password = ""
    for(i=0; i<15; i++){
    let passwords = Math.floor(Math.random() * characters.length);
    password += characters[passwords];
    }
return password;
}
function handlerClick(){
    let pass1 = generate();
    let pass2 = generate();
    slot1.textContent = pass1;
    slot2.textContent = pass2;
}






