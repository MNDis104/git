//Proglangs.js V2.0: Jeg har lagt til funksjonen: Function myFunction() for å varsle brukeren om at sidene brukeren prøver å aksessere er under konstruksjon

function printToOutputBox(selectobj)
{
 var e_proglangs = document.getElementById("proglangs");
 var e_outputbox = document.getElementById("outputbox");
 e_outputbox.innerHTML = "Du har selektert programmeringsspråket " + e_proglangs.options[selectobj.selectedIndex].text;
}

function myFunction()
{
alert("404: Siden du prøver å nå er under konstruksjon. Vi beklager dette. Du blir redigert tilbake til forsiden.");
}

