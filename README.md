# Paddestoelen
Op een leafletkaart worden de paddenstoelen getoond op een grasveld in Zeist
Als je op de marker klikt krijg je informatie over de paddenstoel
Je kunt een deel selectie maken op basis van de kleur en de spots. 

Dit is een challenge van Spronq.

Deze leverde een api met 3 arrays:
Kleur 
Spots
De paddenstoelen


bij init worden middels 2 functies en een useEffect
de arrays beschikbaar gemaakt voor de page.

De icon wordt geladen.

De handlers worden gedefinieerd voor

Marker 
Colorselect en Clear
Spots Select en Clear

OP basis van een deelverzameling (alles of alleen een kleur of spot
of een deelverzameling van kleur plus spot) wordt de selectlist getoond.

Zowel de Alle Kleuren als de Reset maakt de slecect weer naar oorspronkelijke staat.

De web pagina heeft een Header
Dan een grid met 2 kolommen links de twee selectboxes
en rechts de kaart. De kaart wordt zo getoond dat alle paddenstoelen zichtbaar zijn. Er kan ingezoomd en uitgezoomd worden. 
Een footer bij wijze van

Er is gebruik gemaakt voor de opmaak van zowel Bootstrap als CSS.

De index.tsx renderd de app.
De App.tsx bevat de app
De Header.tsx bevat de header
De Footer.tsx bevat de footer

De Api.ts bevat de geleverde arrays en werkt als een server door de delay in de 
default Promise. (1500 ms)

App.css bevat de css voor de app.
index.css bevat de meegeleverde css van de index.

Er wordt van een foto (courtesy M. Crowe)
gebruikt genaakt voor de header
en een png voor de marker.
