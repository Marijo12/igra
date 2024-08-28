alert("Cao Vedrane, drago mi je da si pristao na ovako nesto, PONOVO")
alert("Ovaj put treba da bude komunikativan sa nikolom, treba te medjusobno komunicirati da bi ovo rijesili");
alert("Pa da pocnemo");
alert("Samo da znas da svako od vas na svakom levelu imate hintove ali ti imas njegove a on tvoje hintove.")
alert("SRETNO");

function potvrdi(){
    let unesen_tekst = document.getElementById("unesen_tekst").value;
    
    if(unesen_tekst === "Nikola" || unesen_tekst === "nikola" || unesen_tekst === "NIKOLA" ){
        alert("bravo");
    }else{
        alert("greska")
    }
    }
    