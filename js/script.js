var tabInput = document.getElementById("form-section").getElementsByTagName("input"); //Tableau contenant tous les inputs du formulaire

//Function permettant d'ajouter le nom et le prenom du conjoint en cas d'une carte couple
function appel(x) {
    if (x.value == "Couple") {
        //ajout des champs concernant le conjoint
        document.getElementById("insertHere").innerHTML = '<div class="form-group form-input"><input type="text" name="prenom-cj" id="prenom-cj" required/><label for="prenom-cj" class="form-label">Prénom conjoint</label></div><div class="form-group form-input"><input type="text" name="nom-cj" id="nom-cj" required/><label for="nom-cj" class="form-label">Nom du conjoint</label></div>';
        sessionStorage.setItem('length', tabInput.length);//variable session stockant le nombre d'inputs presents dans le formulaire
    }

    if (x.value != "Couple" && sessionStorage.getItem('length')>10) {
        //si on clique sur un type de de carte différent que couple et si le nombre d'inputs est suppérieur aux 10 présents normalement (avec les deux autres)
        //on les suppriment
        document.getElementById("insertHere").innerHTML = '';
        sessionStorage.setItem('length', tabInput.length);
    }
}

//fuction qui permet de valider les infos du formulaire et de génerer un lien (GET) comportant ces informations et direigent vers le formulaire A ou B
function valider() {
    sessionStorage.setItem('length', tabInput.length);
    //différentes données du formulaire encodé pour être transmis par GET (à travers le lien)
    var nom = encodeURI(document.form.nom.value);
    var prenom = encodeURI(document.form.prenom.value);
    var age = encodeURI(document.form.age.value);
    var mail = encodeURI(document.getElementById("ad-mail").value);
    var tel = encodeURI(document.form.tel.value);
    var typeCarte = encodeURI(document.form.hide.value);

    if (nom=="" || prenom=="" || age=="" || mail=="" || tel=="" || typeCarte=="") {
        document.getElementById("requis").style.color="red";
        document.getElementById("requis").innerHTML='<i class="fa fa-exclamation-triangle"></i> Tous les champs doivent être remplis';
    }else{
    }

    // remplace le @ de l'adressemail par son encodage hexadécimal
    for (let i = 0; i < mail.length; i++) {
        if (mail[i] == "@") {
            val1 = mail.substring(0, i);
            val2 = mail.substring(i+1, mail.length);
        }
    }
    mail = val1 + "%40" + val2;

 
    if (age >= 18) {
        if (sessionStorage.getItem('length')==10) {
            document.getElementById("lien").style.display="inline-block";
            document.getElementById("lien").innerHTML="<a  href='FormulaireB.html?nom="+nom+"&prenom="+prenom+"&age="+age+"&ad-mail="+mail+"&tel="+tel+"&typeCarte="+typeCarte+"'>"
            +"<input type='button' class='btn' value='Formulaire Majeur'/> </a>";
        }
        if (sessionStorage.getItem('length')>10) {
            document.getElementById("lien").style.display="inline-block";
            document.getElementById("lien").innerHTML="<a  href='FormulaireB.html?nom="+nom+"&prenom="+prenom+"&age="+age+"&ad-mail="+mail+"&tel="+tel+"&typeCarte="+typeCarte+"&prenom-cj="+encodeURI(document.getElementById("prenom-cj").value)+"&nom-cj="+encodeURI(document.getElementById("nom-cj").value)+"'>"
            +"<input type='button' class='btn' value='Formulaire Majeur'/> </a>";
        }
        document.getElementById("Reponse").style.color="green";
        document.getElementById("Reponse").innerHTML="Lien générer avec succès ! Cliquez sur celui-ci pour la redirection";
    } else if (age < 18 && age > 1) {
        if (sessionStorage.getItem('length')==10) {
            document.getElementById("lien").style.display="inline-block";
            document.getElementById("lien").innerHTML="<a  href='FormulaireA.html?nom="+nom+"&prenom="+prenom+"&age="+age+"&ad-mail="+mail+"&tel="+tel+"&typeCarte="+typeCarte+"'>"
            +"<input type='button' class='btn' value='Formulaire Majeur'/> </a>";
        }
        if (sessionStorage.getItem('length')>10) {
            document.getElementById("lien").style.display="inline-block";
            document.getElementById("lien").innerHTML="<a  href='FormulaireA.html?nom="+nom+"&prenom="+prenom+"&age="+age+"&ad-mail="+mail+"&tel="+tel+"&typeCarte="+typeCarte+"&prenom-cj="+encodeURI(document.getElementById("prenom-cj").value)+"&nom-cj="+encodeURI(document.getElementById("nom-cj").value)+"'>"
            +"<input type='button' class='btn' value='Formulaire Majeur'/> </a>";
        }
        document.getElementById("Reponse").style.color="green";
        document.getElementById("Reponse").innerHTML="Lien générer avec succès ! Cliquez sur celui-ci pour la redirection";
    }
    if (age < 1) {
        document.getElementById("Reponse").style.color="red";
        document.getElementById("Reponse").innerHTML="<i class='fa fa-exclamation-triangle'></i>&nbsp;L'age ne peut être négatif ou égale à 0";
    }
}

//function qui montre les élements de la selection personalisée des cartes
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//evenment permettant de montrer et d'enlever la selection
window.onclick = function (event) {
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

//function permettant de d'afficher la valeur de l'élement selectionner comme valeur du boutton principal de la selection
function affichage(x) {
    document.getElementById("dropbtn").value = x.value;
    document.getElementById("dropbtn").innerHTML = document.getElementById("dropbtn").value + '&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-sort-down col"></i>';
    document.getElementById("hide").value = x.value;

}


//function utile dans les formulaires A et B permettant de recupperer de manière brute les différents données du formulaire principal contenu dans le lien de la page
function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp : les caractères frèquents
        function (m, key, value) { // callback 
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}


//function permettant de d'ajouter d'abord les champs du conjoint si ceux-ci exixtaient dans le formulaire principal ensuite rempli tous les champs
//avec les valeurs réccuperer dans le lien
function insert() {

    if (sessionStorage.getItem('length')>10) {
        //ajoute les champs du conjoint
        document.getElementById("insertHere2").innerHTML = '<div class="form-group form-input"><input type="text" name="prenom-cj" id="prenom-cj" required/><label for="prenom-cj" class="form-label">Prénom conjoint</label></div><div class="form-group form-input"><input type="text" name="nom-cj" id="name-cj" required/><label for="nom-cj" class="form-label">Nom du conjoint</label></div>';
    }
    //remplcer tous les + par des " " pour une meilleure lisibilité
    for (let i = 0; i < tabInput.length; i++) {
        tabInput[i].maxLength = $_GET(tabInput[i].name).length;
        tabInput[i].minLength = $_GET(tabInput[i].name).length;
        tabInput[i].value = replaceAll("+", " ", decodeURI($_GET(tabInput[i].name)));
    }

    //décoder l'email
    str = tabInput[3].value;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "%") {
            val1 = str.substring(0, i);
            val2 = str.substring(i + 3, str.length);
        }
    }
    tabInput[3].value = val1 + "@" + val2;
    sessionStorage.setItem('length', 0);//réinitialisation de la session contenant le nombre d'input    
}

//remplace tous les éléments x d'une chaine y par un élément z
function replaceAll(recherche, remplacement, chaineAModifier) {
    return chaineAModifier.split("+").join(" ");
}