let laVille= "paris";
refresh(laVille);
let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click',()=>{
  laVille = prompt('choisissez votre ville'); 
  refresh(laVille);
  
})


function refresh (){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+laVille+'&appid=491be6e00cccdf9282bb76bf77f8607e&units=metric';

 let requete = new XMLHttpRequest(); 
 requete.open('GET',url); 
 requete.responseType='json'; 
 requete.send(); 
 requete.onload= function(){
   if(requete.readyState === XMLHttpRequest.DONE){
     if(requete.status===200){
       let reponse = requete.response; 
       let maTemp = reponse.main.temp;
       let city = reponse.name;
       let myTemp = document.querySelector('#temperature_label');
       let mycity =document.querySelector('#ville');
       myTemp.textContent= maTemp;
       mycity.textContent= city;
     
  
     }
    else{
        alert("une erreur est survenue, reessayez plutard.");
      
     }
   }
 }
   
  
 }
 setInterval(refresh,900);

