# Sistemi di Lindenmayer (L-System)
[versione live](https://larobernasconi.github.io/l-system/)

**Autore: Lara Bernasconi**  
SUPSI 2023-234  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

## Introduzione e tema
I Sistemi di Lindenmayer, o L-System, sono un metodo formale introdotto dal biologo Aristid Lindenmayer nel 1968 per modellare lo sviluppo delle piante. L-System è un tipo di sistema di riscrittura e di grammatica formale, utilizzato per costruire oggetti complessi partendo da un oggetto semplice e sostituendo ricorsivamente le parti secondo le istruzioni fornite da un insieme di regole di riscrittura. Questo progetto esplora la storia, lo sviluppo e le applicazioni degli L-System, con particolare attenzione alla loro capacità di generare immagini realistiche di piante e frattali.

## Riferimenti progettuali
Il principale riferimento progettuale di questo lavoro è il metodo di Lindenmayer per la modellazione delle piante e dei frattali. Il progetto si ispira ai numerosi sviluppi e applicazioni degli L-System nella produzione di immagini realistiche di piante e nella generazione di curve frattali. Tra i contributi significativi vi sono i lavori di Szilard e Quinton, Siromoney e Subramanian, e Prusinkiewicz, che hanno dimostrato il potenziale degli L-System in vari ambiti.

## Design dell’interfaccia e modalità di interazione

L'interfaccia del progetto è progettata per essere semplice e intuitiva, consentendo agli utenti di esplorare le origini e gli sviluppi degli L-System. La pagina principale presenta link di navigazione verso diverse sezioni che approfondiscono i vari aspetti degli L-System. La navigazione è posizionata nella parte inferiore della pagina, permettendo agli utenti di spostarsi facilmente tra le diverse sezioni del progetto. Ogni sezione è progettata come una pagina separata per consentire l'uso del progetto come presentazione. Questo design facilita la comprensione e l'esplorazione degli argomenti in modo sequenziale, ideale per un contesto educativo o di ricerca.

### Interazione

L'interazione con il progetto è facilitata attraverso vari elementi dell'interfaccia:

Pulsanti di Navigazione: I pulsanti "back" e "fonti" sono posizionati in alto a sinistra e a destra della pagina, offrendo un facile accesso per tornare alla pagina principale o per visualizzare le fonti. Questi pulsanti sono sempre visibili grazie alla loro posizione fissa, migliorando l'usabilità.

Animazione di Caricamento: La pagina utilizza un'animazione di fade-in che rende l'interfaccia più piacevole e fluida all'avvio. Questo piccolo tocco di design aiuta a catturare l'attenzione dell'utente e a rendere l'esperienza visiva più accattivante.

Tipografia e Colori: La scelta del font 'AkzidenzGrotesk' conferisce un aspetto moderno e professionale al testo, mentre l'uso del colore nero per i titoli e delle sfumature di grigio per i sottotitoli e il testo del corpo mantiene un contrasto elevato per una leggibilità ottimale. La dimensione del font è adattabile alle diverse sezioni per garantire la gerarchia visiva e l'attenzione sui punti chiave.

Layout Responsive: La struttura del layout è flessibile e adattabile a diverse dimensioni di schermo. Questo è particolarmente evidente nella sezione "coral-container" dove le immagini e i testi descrittivi dei coralli si adattano allo spazio disponibile, garantendo una visualizzazione ottimale sia su desktop che su dispositivi mobili.

Contenuti Scorrevoli: Le sezioni di testo, come nella classe "txt", sono progettate per essere scorrevoli con una barra di scorrimento automatica, permettendo agli utenti di leggere lunghe sezioni di contenuto senza dover navigare via dalla pagina principale. Questo design mantiene l'utente immerso nel contenuto senza interruzioni.

Iframes Integrati: Gli esempi interattivi, come gli alberi frattali, sono incorporati tramite iframe che riempiono l'intera altezza della finestra del browser. Ciò consente una presentazione coinvolgente e dinamica del contenuto, permettendo agli utenti di interagire con gli esempi direttamente nella pagina senza bisogno di reindirizzamenti.

### Commento sul Design

Il design del progetto è stato attentamente studiato per massimizzare l'interazione utente e la facilità d'uso. La posizione della navigazione in basso assicura che gli utenti possano sempre accedere facilmente alle diverse sezioni senza doversi distrarre dal contenuto principale. Le animazioni di fade-in migliorano l'estetica generale, creando un'esperienza più fluida e accattivante.

L'uso di tipografia chiara e colori contrastanti non solo rende il contenuto leggibile, ma anche visivamente piacevole. Inoltre, il layout responsive garantisce che il sito sia accessibile e funzionale su una varietà di dispositivi, offrendo un'esperienza utente consistente.


## Tecnologia usata
Per sviluppare il progetto sui Sistemi di Lindenmayer, sono state utilizzate diverse tecnologie. La struttura HTML definisce la struttura base della pagina web, mentre CSS è utilizzato per lo stile e la presentazione visiva. Il cuore dell'interattività è gestito tramite JavaScript, in particolare la libreria p5.js, che facilita la visualizzazione dei frattali e delle piante generate dagli L-System.


### JavaScript per lo Script di Esempio

Il seguente script utilizza p5.js per generare un albero frattale basato sulle regole degli L-System. Viene creato un sistema di riscrittura e disegnato utilizzando una grafica a tartaruga.


```javascript
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
```


All'interno del ciclo, vengono eseguite le seguenti operazioni in base al carattere corrente:
- **"F"**: Disegna una linea e trasla l'origine del sistema di coordinate.
- **"+"**: Ruota il sistema di coordinate in senso antiorario di un certo angolo.
- **"-"**: Ruota il sistema di coordinate in senso orario di un certo angolo.
- **"["**: Salva lo stato corrente delle trasformazioni e delle coordinate (push).
- **"]"**: Ripristina lo stato salvato (pop).


## Target e contesto d’uso
Il progetto sui Sistemi di Lindenmayer è rivolto a studenti, ricercatori e appassionati di botanica, informatica e matematica, interessati a esplorare e comprendere i principi degli L-System e le loro applicazioni. Il contesto d'uso principale è un ambiente educativo o di ricerca, dove gli utenti possono interagire con il progetto per approfondire la loro conoscenza degli algoritmi botanici e delle strutture frattali.
