Filene i mappen LAB4DONE er en webapplikasjon for fremvisning av ulike programmeringsspr�k
LAB4.html - Applikasjonens hovedside
LAB4.css - gir de ulike elementene i LAB4.html styling
link_sprite_img - bilde som brukes i HTML
js - Dynamisk endring av elementer og hendelser i HTML

Kontrollsp�rsm�l:
Ikke oppgitt i oppgaveteksten for laboppgave 4. 

Filene i denne repositoren er en webapplikasjon for � �ve p� Jquery og Canvas
Lab3_v1.html: Reagerer p� piltastene opp,ned,venstre,h�yre
Lab3_v2.html: Reagerer p� museklikk og displayer resultatene
Lab3_v3.html: Reagerer p� museklikk, displayer resultatene og bergener musens position innenfor et avgrenset omr�de i vinduet. 
Lab3.css: Styling
Readme.txt: Forteller noe om hvilke filer som er vedlagdt og info om hva filene inneholder + Svar p� kontrollsp�rsm�l gitt av Janis  


Kontrollsp�rsm�l LAB3 
0) Fordelen med eksisterende JavaScript biblotek er at en lettere (mindre arbeid dvs. klassene kan arve egenskaper fra hverandre.) kan endre siden dynamisk og vet at biblotekene fungerer. Samt at de forskjellige browserene implementerer ELM anderledes. 

1) Sterke sider til HTML/Css: Det er lett i HTML/ Css � endre tekst, samt gi disse en styling. Det er viktig for websider � ha en solid bygd HTML i bunn. Ihvertfall f�r sv�rt mange websider. HTML/Css er alts� stukturen p� hvordan siden vil se ut.

Sterke sider til Canvas: Canvas trenger ikke � f�lge det hierarkiske struktuelle oppbyggingen til HTML/css. Og jobber derfor raskere enn HTML/css. Canvas er ogs�/ har ogs� en h�yere pixel niv� av kontroll av grafikk og tekst p� de aktuelle sidene. 

Det er meningsfult � bruke Canvas, om en f.eks vil p� detaljniv� konsistent og konstant definere elementer, det v�re f.eks dens plassering og utseende. 

2) 

HTML5 Canvas sin grafiske presentasjonsm�te:
Canvas i HTML er best egnet for raske realtidsapplikasjoner. Og kan oppn�s via f.eks komponenter (hierarkisk system)  

 

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