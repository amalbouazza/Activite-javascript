
function AjouterPays() {
    let pays = document.getElementById("C5").value;
    let listePays = document.getElementById("lepays");
    for (let i = 0; i < listePays.options.length; i++) {
        if (listePays.options[i].value === pays) {
            return;
        }
    }

    let option = document.createElement("option");
    option.value = pays;
    option.text = pays;
    listePays.appendChild(option);
}

function verifiernom() {
    var nom = document.getElementById("C1").value;
    if (nom.length < 8 || nom.length > 20) {
       
        document.getElementById("T2").innerHTML = "Le nom doit contenir entre 8 et 20 caractères.";
        document.getElementById("T2").style.color = "red";
        return false;
    } else {
        document.getElementById("T2").style.color = "black";
        document.getElementById("T2").innerHTML = "";
    }
}

function verifieradresse(){
    var adresse = document.getElementById("C2").value;
    if (adresse.length < 20) {
        
        document.getElementById("T3").innerHTML = "L'adresse doit contenir au moins 20 caractères.";
        document.getElementById("T3").style.color = "red";
        return false;
    } else {
        
        document.getElementById("T3").innerHTML = "";
        document.getElementById("T3").style.color = "black";
    }
}
function verifierpostal(){
    var no_postal = document.getElementById("C3").value;
    if (no_postal != "3000" && no_postal != "4000") {
        
        document.getElementById("T4").innerHTML = "Le code postal doit être 3000 ou 4000.";
        document.getElementById("T4").style.color = "red";
        return false;
    } else {
        
        document.getElementById("T4").innerHTML = "";
        document.getElementById("T4").style.color = "black";
        if (no_postal == "3000") {
            document.getElementById("C4").value = "ville1";
        } else if (no_postal == "4000") {
            document.getElementById("C4").value = "ville2";
        }
    }

    return true;
}

function VerifierFormulaire() {
    const nomError = verifierNom();
    const adresseError = verifierAdresse();
    const postalError = verifierPostal();

    return !(nomError || adresseError || postalError);
}

function AfficherAlert() {
    var civilite = getCivilite();
    var nom = document.getElementById("C1").value;
    var adresse = document.getElementById("C2").value;
    var no_postal = document.getElementById("C3").value;
    var localite = document.getElementById("C4").value;
    var pays = document.getElementById("lepays").value;

    if (civilite != "" && nom != "" && adresse != "" && no_postal != "" && localite != "" && pays != "") {
        var plateformes = getPlateformes();
        var applications = getApplications();
        alert("Civilite : " + civilite + "\nNom : " + nom + "\nAdresse : " + adresse + "\nNo postal : " + no_postal + "\nLocalité : " + localite + "\nPays : " + pays + "\nPlateformes : " + plateformes + "\nApplications : " + applications);
    } else {
        alert("Veuillez corriger les erreurs suivantes :\n- Le nom est obligatoire.\n- L'adresse est obligatoire.\n- Le numéro postal est obligatoire.\n- La localité est obligatoire.\n- Le pays est obligatoire.");
    }
}





function getPlateformes() {
    const plateformesCheckboxes = document.querySelectorAll('input[type="checkbox"][name="materiel"]:checked');
    return Array.from(plateformesCheckboxes).map(checkbox => checkbox.value);
}

function getApplications() {
    const applicationsSelect = document.querySelector('select[name="applications"]');
    return Array.from(applicationsSelect.selectedOptions).map(option => option.value);

    
}

function getCivilite(){
    const civikiteRadio = document.querySelectorAll('input[type="radio"][name="civilite"]:checked');
    return Array.from(civikiteRadio).map(checkbox => checkbox.value);

}
