Filene i denne repositoren er en webapplikasjon for � presentere programmeringsspr�k. Vedlagdte filer er:
proglangs.html - Sideoppsett for brukeren � se via en internettleser(browser)
proglangs.css  - Definerer farge, possition og styling til elementene i HTMLen
proglangs.js   - dynamisk endrer elementer inni HTML. Reagerer n�r brukeren foretar seg valg inne i HTML.
Readme.txt     - Forteller noe om hvilke filer som er vedlagdt og info om hva filene inneholder + Svar p� kontrollsp�rsm�l gitt av Janis  
 

Kontrollsp�rsmpl LAB 2

MVC: Modell for � forhindre repitisjon av data. Og gj�re webapplikasjonen mer oversiktelig og strukrutert.  

Model: Proglangs.html er filen som holder p� dataene
View:  Proglangs.css bestemmer hvordan dataene skal fremvises
Controller: Proglangs.js   

Kontrollsp�rsm�l LAB 1

Oppgave 0.
JavaScript kan blandt annet brukes til � gi brukeren en respons.
Den gj�r dette ved � dynamisk endre deler av HTML filen.

Oppgave 1. 
Forskjellden p� CSS Id og Class er blandt annet:
ID = kun kan brukes en gang -->Hvert element kan kun ha en ID og hver html fil kan kun ha et element med den spesifikke id'en. 
Class = flere ganger-->Du kan bruke den samme classen for flere elementer. Eller flere classer for samme element. 

Det l�nner seg alts� � f.eks bruke class for elementer en vet skal bruke flere ganger eller skal ha samme styling. 

Oppgave 2. 
Listen(deloppgave 0) vil ved f�rste �yekast v�re lengere kontra "rullegardinen"(deloppgave 1) For en s� lang liste med kronologiske valg, vil rullegardinen fremtre som mer brukervennelig
og vil ha bedre brukbarhet kontra listen. En sparer tid og ikke minst plass ved � bruke fremgangsm�ten i deloppgave 1. Alternativt ville en friere valgmulighet til � plassere elementene
i deloppgave 0 muligens gj�re det lettere for brukeren � oppfatte informasjonen som fremlegges. Typisk for rullegardinen egner seg godt n�r brukeren skal foreta et definert valg som f.eks hvilket 
land en kommer fra. Mens listel�sningen passer bedre n�r valgene ikke er like kort-definerte, eller har et omgfang som krever en bedre systematisk fremleggelse, design.

Oppgave 3. 
Wikipedia bruker hovedsakelig HTML teknikken Ul og Il ogs� kategorisering med span brukes. Designmessig sett, kategoriserer wiki listene i forskjellige grupperinger, basert p� deres forbokstav.
Dette, fremfor rullegardinen metoden vil ta mere plass, men er mer systematisk. Som nevnt i besvarelsen ovenfor, vil denne form for kategorisering v�re foretrekkende fremfor rullegardinen, gitt at
designerl�sningen var opp til den enkelte.

Oppgave 4.
Div brukes for � pakke inn/definere seksjoner i HTML, mens Span brukes for � definere sm� portioner av tekst, bilder osv. inne i f.eks en <P> eller <div> 
F.eks:
<div>Dette er en <span>liten bit</span> av tekst som b�de har div og span i seg./div>

Oppgave 5. 
Brukbarhetsproblem(ene) kan v�re foreksempel at en bruker, �nsker � selektere flere programmer enn bare ett valg. Det gj�r det vanskelig � implementere en bra "form" l�sning
(sidenotat: Jeg forstod ikke sp�rsm�let helt klart. Besvarer sp�rsm�let etter best mulig evne.) 