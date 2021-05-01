var supp = "";
var tabInput = document.getElementById("form-section").getElementsByTagName("input");

function appel(x) {
    if (x.value == "Couple") {
        supp = "true";
        sessionStorage.setItem('length', tabInput.length);
        document.getElementById("insertHere").innerHTML = '<div class="form-group form-input"><input type="text" name="prenom-cj" id="prenom-cj" required/><label for="prenom-cj" class="form-label">Prénom conjoint</label></div><div class="form-group form-input"><input type="text" name="nom-cj" id="name-cj" required/><label for="nom-cj" class="form-label">Nom du conjoint</label></div>';
    }

    if (x.value != "Couple" && length > 0) {
        supp = "false";
        document.getElementById("insertHere").innerHTML = '';
        sessionStorage.setItem('length', 0);
    }


}

function valider() {
    var age = document.form.age.value;

    if (age >= 18) {
        document.form.action = "FormulaireB.html";
    } else if (age < 18) {
        document.form.action = "FormulaireA.html";
    } else if (age < 1) {
        alert("L'age ne peut être négatif ou égale à 0");
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

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

function affichage(x) {
    document.getElementById("dropbtn").value = x.value;
    document.getElementById("dropbtn").innerHTML = document.getElementById("dropbtn").value + '&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-sort-down col"></i>';
    document.getElementById("hide").value = x.value;

}

function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

function insert() {
    if (sessionStorage.getItem('length')>6) {
        document.getElementById("insertHere2").innerHTML = '<div class="form-group form-input"><input type="text" name="prenom-cj" id="prenom-cj" required/><label for="prenom-cj" class="form-label">Prénom conjoint</label></div><div class="form-group form-input"><input type="text" name="nom-cj" id="name-cj" required/><label for="nom-cj" class="form-label">Nom du conjoint</label></div>';
    }
    tabInput = document.getElementById("form-section").getElementsByTagName("input");
    for (let i = 0; i < tabInput.length; i++) {
        tabInput[i].value = replaceAll("+", " ", decodeURI($_GET(tabInput[i].name)));
    }

    str = tabInput[3].value;
    hex = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "%") {
            val1 = str.substring(0, i);
            val2 = str.substring(i + 3, str.length);
        }
    }
    tabInput[3].value = val1 + "@" + val2;
    sessionStorage.setItem('length', 0);
}

function replaceAll(recherche, remplacement, chaineAModifier) {
    return chaineAModifier.split("+").join(" ");
}

if (newTabInputLength > 10) {
    document.getElementById("insertHere2").innerHTML = '<div class="form-group form-input"><input type="text" name="prenom-cj" id="prenom-cj" required/><label for="prenom-cj" class="form-label">Prénom conjoint</label></div><div class="form-group form-input"><input type="text" name="nom-cj" id="name-cj" required/><label for="nom-cj" class="form-label">Nom du conjoint</label></div>';
}