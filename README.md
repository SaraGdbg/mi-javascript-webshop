# Webshop - assignment from Medieinstitutet

This was my first ever JavaScript project. The assignment was part of the basic course in JavaScript at the Front End Developer program at Medieinstitutet, Stockholm.
The assignment was to build a webshop from scratch using HTML, CSS and JavaScript and included many different functions and features. See section Assignment Details to read the assignment as a whole (in Swedish).

Visit my project: https://medieinstitutet.github.io/fed23d-js-grundkurs-webshop-SaraGdbg/

## Authors

- [@SaraGdbg](https://github.com/SaraGdbg)

## Built with

The project is built using the following:

![Miro](https://img.shields.io/badge/-Miro-FFFF00?logo=miro&logoColor=050038&style=for-the-badge)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![Mobile view - first page](https://github.com/Medieinstitutet/fed23d-js-grundkurs-webshop-SaraGdbg/blob/main/screenshots/mobile1.PNG)
![Mobile view - products](https://github.com/Medieinstitutet/fed23d-js-grundkurs-webshop-SaraGdbg/blob/main/screenshots/mobile2.PNG)
![Mobile view - order form](https://github.com/Medieinstitutet/fed23d-js-grundkurs-webshop-SaraGdbg/blob/main/screenshots/mobile3.PNG)
![Mobile view - order confirmation](https://github.com/Medieinstitutet/fed23d-js-grundkurs-webshop-SaraGdbg/blob/main/screenshots/mobile4.PNG)
![Desktop view 1](https://github.com/Medieinstitutet/fed23d-js-grundkurs-webshop-SaraGdbg/blob/main/screenshots/chrome1.PNG)
![Desktop view 2](https://github.com/Medieinstitutet/fed23d-js-grundkurs-webshop-SaraGdbg/blob/main/screenshots/chrome2.PNG)

## Assignments Details

Generellt

- Beställningssidan ska vara EN sida; du ska inte växla mellan kundkorg och produktöversikt t.ex. Det räcker alltså med EN HTML-fil och tillhörande JavaScript-kod.
- Webbshoppen ska vara responsiv. Hur design/utseende ser ut, är upp till er, men det ska fungera på mobil, tablet & desktop.
- Gränssnittet/sidans utseende ska vara intuitivt.
- Det ska gå att utföra hela beställningsförfarandet med hjälp av enbart tangentbordet (tillgängligt).
- Bredvid/i anslutning till varje munk ska det finnas knappar för att öka och minska antalet beställda munkar. Tänk på att dessa ska fungera även med tangentbordet.
- Munkarna är hårdkodade i filen (de behöver inte komma från ett API, en databas eller JSON-fil).
- När man tryckt på beställ-knappen så ska en bekräftelse-ruta visas med information om beställningen och leveranstid.
- Produkterna ska gå att sortera utifrån namn, pris, kategori och rating

Beställningssammanfattning

- Totalsumman ska uppdateras baserat på ändringar som sker i antal beställda munkar i realtid
- Det ska finnas en varukorgssammanställning som visar endast de munkar som har beställts. Denna ska alltså vara skild från själva beställningsformuläret.

Munkarna (produkterna)

- Varje munk ska ha följande egenskaper:
  - Ett namn
  - Ett pris
  - En rating
  - En kategori
  - Det ska finnas minst 10 munkar i webbshopen.

Specialregler

- På måndagar innan kl. 10 ges 10 % rabatt på hela beställningssumman. Detta visas i varukorgssammanställningen som en rad med texten "Måndagsrabatt: 10 % på hela beställningen".
- På fredagar efter kl. 15 och fram till natten mellan söndag och måndag kl. 03.00 tillkommer ett helgpåslag på 15 % på alla munkar. Detta ska inte framgå för kunden att munkarna är dyrare, utan priset ska bara vara högre i "utskriften" av munkarna.
- Om kunden har beställt för totalt mer än 800 kr ska det inte gå att välja faktura som betalsätt.
- Om kunden har beställt minst 10 munkar av samma sort, ska munkpriset för just denna munksort rabatteras med 10 %
- Om kunden beställer totalt mer än 15 munkar så blir frakten gratis. I annat fall är fraktsumman 25 kr plus 10% av totalbeloppet i varukorgen.
- Om kunden inte har lagt beställningen inom 15 minuter så ska beställningsformuläret tömmas/rensas och kunden ska meddelas att denne är för långsam.

Formulär för kunduppgifter

Fält för:

- Förnamn
- Efternamn
- Adress (gata)
- Postnummer
- Postort
- Ev. portkod
- Telefon (mobil)
- E-postadress
- Val för betalsätt: kort eller faktura
- Om faktura valts som betalsätt ska ett formulärfält för svenskt personnummer visas. Även detta fält ska valideras innan formuläret går att skicka iväg, dvs. att man fyllt i korrekt personnummer.
- Om kort väljs som betalsätt, visas fält för kortnummer, datum/år och CVC. Dessa behöver inte valideras!
- Checkbox för godkännande av behandling av personuppgifter
- Checkbox för beställning av nyhetsbrev (ska vara iklickad som default)
- Samtliga formulärfält ska valideras och formuläret/beställningen ska inte gå att skicka om det finns några fel
- Felen ska markeras och kommuniceras tydligt (t.ex. ej enbart med röd färg, tag i beaktande a11y)
- När formuläret är korrekt ifyllt ska Skicka-/Beställ-knappen aktiveras, innan det är den utgråad
- Det ska finnas en "Rensa beställning"-knapp som återställer samtliga formulärfält liksom eventuella beställda munkar/produkter (alltså antalet återställs till 0)
- Det ska finnas ett fält för att mata in en rabattkod.

Övrigt

Det ska ges någon from av visuell feedback på när varukorgens totalsumma uppdateras. Med detta menas exempelvis någon visuell förändring, såsom en färg-skiftning, storleksskiftning, eller motsv.

Tekniska anmärkningar

- CSS:en ska byggas med hjälp av Sass (alt. Tailwind)
- Ni ska endast använda "Vanilla JavaScript", dvs. ni FÅR inte göra detta med hjälp av ett ramverk.
- HTML kan skrivas i HTML-dokumentet; noder behöver INTE skapas med JavaScript mer än om det är absolut nödvändigt.
