function appel(x){

    if(x.value == "Couple"){
        document.getElementById("insertHere").innerHTML='<div class="form-group form-input"><input type="text" name="nom" id="name" required/><label for="nom" class="form-label">Nom</label></div><div class="form-group form-input"><input type="text" name="prenom" id="prenom" required/><label for="prenom" class="form-label">Prénom</label></div>';
    }
    var length = document.getElementById('insertHere').childNodes.length;

    if(x.value != "Couple" && length>0){
        document.getElementById("insertHere").style.display="none";
    }
}

function valider(){
    var age = document.form.age.value;

    if (age>=18) {
        document.form.action="FormulaireA.html";
    }else if(age<18){
        document.form.action="FormulaireB.html";
    }else if (age < 1) {
        document.getElementById("reponse").innerText="L'age ne peut être négatif ou égale à 0"
    }
    
}

function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function affichage(x){
    document.getElementById("dropbtn").value=x.value;
}