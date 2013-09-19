Filene i denne repositoren er en webapplikasjon for å presentere programmeringsspråk. Vedlagdte filer er:
proglangs.html - Sideoppsett for brukeren å se via en internettleser(browser)
proglangs.css  - Definerer farge, possition og styling til elementene i HTMLen
proglangs.js   - dynamisk endrer elementer inni HTML. Reagerer når brukeren foretar seg valg inne i HTML.
Readme.txt     - Forteller noe om hvilke filer som er vedlagdt og info om hva filene inneholder + Svar på kontrollspørsmål gitt av Janis  
 

Kontrollspørsmpl LAB 2

MVC: Modell for å forhindre repitisjon av data. Og gjøre webapplikasjonen mer oversiktelig og strukrutert.  

Model: Proglangs.html er filen som holder på dataene
View:  Proglangs.css bestemmer hvordan dataene skal fremvises
Controller: Proglangs.js   

Kontrollspørsmål LAB 1

Oppgave 0.
JavaScript kan blandt annet brukes til å gi brukeren en respons.
Den gjør dette ved å dynamisk endre deler av HTML filen.

Oppgave 1. 
Forskjellden på CSS Id og Class er blandt annet:
ID = kun kan brukes en gang -->Hvert element kan kun ha en ID og hver html fil kan kun ha et element med den spesifikke id'en. 
Class = flere ganger-->Du kan bruke den samme classen for flere elementer. Eller flere classer for samme element. 

Det lønner seg altså å f.eks bruke class for elementer en vet skal bruke flere ganger eller skal ha samme styling. 

Oppgave 2. 
Listen(deloppgave 0) vil ved første øyekast være lengere kontra "rullegardinen"(deloppgave 1) For en så lang liste med kronologiske valg, vil rullegardinen fremtre som mer brukervennelig
og vil ha bedre brukbarhet kontra listen. En sparer tid og ikke minst plass ved å bruke fremgangsmåten i deloppgave 1. Alternativt ville en friere valgmulighet til å plassere elementene
i deloppgave 0 muligens gjøre det lettere for brukeren å oppfatte informasjonen som fremlegges. Typisk for rullegardinen egner seg godt når brukeren skal foreta et definert valg som f.eks hvilket 
land en kommer fra. Mens listeløsningen passer bedre når valgene ikke er like kort-definerte, eller har et omgfang som krever en bedre systematisk fremleggelse, design.

Oppgave 3. 
Wikipedia bruker hovedsakelig HTML teknikken Ul og Il også kategorisering med span brukes. Designmessig sett, kategoriserer wiki listene i forskjellige grupperinger, basert på deres forbokstav.
Dette, fremfor rullegardinen metoden vil ta mere plass, men er mer systematisk. Som nevnt i besvarelsen ovenfor, vil denne form for kategorisering være foretrekkende fremfor rullegardinen, gitt at
designerløsningen var opp til den enkelte.

Oppgave 4.
Div brukes for å pakke inn/definere seksjoner i HTML, mens Span brukes for å definere små portioner av tekst, bilder osv. inne i f.eks en <P> eller <div> 
F.eks:
<div>Dette er en <span>liten bit</span> av tekst som både har div og span i seg./div>

Oppgave 5. 
Brukbarhetsproblem(ene) kan være foreksempel at en bruker, ønsker å selektere flere programmer enn bare ett valg. Det gjør det vanskelig å implementere en bra "form" løsning
(sidenotat: Jeg forstod ikke spørsmålet helt klart. Besvarer spørsmålet etter best mulig evne.) 