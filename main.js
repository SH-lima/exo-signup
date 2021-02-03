const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];


// selectionner les champs 
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const confirmation = document.querySelector("#comfirm-password")
const Erreur = document.querySelector("#msg-erreur")
const Erreur2 = document.querySelector("#msg-erreur2")
const Erreur3 = document.querySelector("#msg-erreur3")
const Erreur4 = document.querySelector("#msg-erreur4")
let isValid = true 

//           Tous les champs sont requis
document.querySelector("form").addEventListener("submit", (event) => {
const validation = (champs, msgErreur)=>{
if(champs.value===""){
event.preventDefault();
isValid=false
msgErreur.innerHTML="*Ce champs est obligatoire"
msgErreur.style="color:red;"
}else{
  msgErreur.innerHTML="" 
}
}  

validation(username, Erreur)
validation(password, Erreur2) 
validation(confirmation, Erreur3)

//           Les deux mots de passes doivent être identiques
if (password.value !== confirmation.value){
  isValid=false
  event.preventDefault();
  Erreur4.innerHTML="*il faut mettre le même mot de passe "; 
}else{
  Erreur4.innerHTML="";
}

  // avant d'envoyer les données au serveur, on peut faire une étape de validation
if(isValid){
  document.querySelector("main").innerHTML = "Compte créé :)";
  isValid=true 
}
});

password.addEventListener("keydown", ()=>{
  // 0 à 4 caractères : très faible
  if(password.value.length <= 4){
    Erreur2.innerHTML="très faible" 
  }else if(4 < password.value.length && password.value.length <= 8 ){
    Erreur2.innerHTML="faible" 
    console.log("Hi")
  }else if(8 < password.value.length && password.value.length < 12){
    Erreur2.innerHTML="bonne"
    Erreur2.style="color:green;"
  }else{
    Erreur2.innerHTML="Trés bonne"
    Erreur2.style="color:green;"    
  }
  // 8 à 12 caractères : bonne
  // plus de 12 caractères : très bonne
})


