window.addEventListener("scroll", function() { 
let deplacement = ((window.scrollY)*100)/(document.body.offsetHeight-window.innerHeight);
document.getElementById('progress_bar').value = deplacement;
console.log(deplacement); // Affiche le contenu de la variable maVariable dans la console du navigateur
});




function myScroll() { // Définition de la fonction de scroll
 var progress = document.getElementById('progress_bar').value; 

		 var value = (progress * (document.body.offsetHeight-window.innerHeight))/100
		 window.scroll(0, value);
		 }
