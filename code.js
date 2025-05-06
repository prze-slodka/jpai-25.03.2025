function pustoTu(napis) {
    if (
        napis.length == 0){return true;}
    else if(bialeZnaki(napis)== true){
        return true;}
    else {return false;}
}


function weryfikacja(){
    var imie = (document.forms["user_data"]["imie"].value);

    if (pustoTu(imie) == true) {
        alert("Nie podałeś imienia!");
        return false;

    } else {
            return true;
        }
    }


function bialeZnaki(string) {
    return string.trim().length === 0;
}

function walidujNapis(dane, komunikat){
    var napis = (document.forms["user_data"][dane].value);
    if (pustoTu(napis) == true) {
        alert("BRAK " + komunikat + "!");
        return false;
    }
    else if (dane == "email") {
        poprawnyAdres(napis);
    } else {
        return true;
    }
}


function poprawnyAdres(adres) {
    let email_form = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email_form.test(adres)) {
        return true;
    } else {
        alert("Adres e-mail jest niepoprawny");
        return false;
    }
}
