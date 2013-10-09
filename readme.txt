Filene i denne repositoren er en webapplikasjon for å øve på Jquery og Canvas
Lab3_v1.html: Reagerer på piltastene opp,ned,venstre,høyre
Lab3_v2.html: Reagerer på museklikk og displayer resultatene
Lab3_v3.html: Reagerer på museklikk, displayer resultatene og bergener musens position innenfor et avgrenset område i vinduet. 
Lab3.css: Styling
Readme.txt: Forteller noe om hvilke filer som er vedlagdt og info om hva filene inneholder + Svar på kontrollspørsmål gitt av Janis  


Kontrollspørsmål LAB3 
0) Fordelen med eksisterende JavaScript biblotek er at en lettere (mindre arbeid dvs. klassene kan arve egenskaper fra hverandre.) kan endre siden dynamisk og vet at biblotekene fungerer. Samt at de forskjellige browserene implementerer ELM anderledes. 

1) Sterke sider til HTML/Css: Det er lett i HTML/ Css å endre tekst, samt gi disse en styling. Det er viktig for websider å ha en solid bygd HTML i bunn. Ihvertfall får svært mange websider. HTML/Css er altså stukturen på hvordan siden vil se ut.

Sterke sider til Canvas: Canvas trenger ikke å følge det hierarkiske struktuelle oppbyggingen til HTML/css. Og jobber derfor raskere enn HTML/css. Canvas er også/ har også en høyere pixel nivå av kontroll av grafikk og tekst på de aktuelle sidene. 

Det er meningsfult å bruke Canvas, om en f.eks vil på detaljnivå konsistent og konstant definere elementer, det være f.eks dens plassering og utseende. 

2) 

HTML5 Canvas sin grafiske presentasjonsmåte:
Canvas i HTML er best egnet for raske realtidsapplikasjoner. Og kan oppnås via f.eks komponenter (hierarkisk system)  

 

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