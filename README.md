# Sistemi di Lindenmayer (L-System)
[versione live](https://larobernasconi.github.io/l-system/)

**Autore: Lara Bernasconi**  
SUPSI 2023-234  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

## Introduzione e tema
Questo progetto esplora la storia, lo sviluppo e le applicazioni degli L-System, con particolare attenzione alla loro capacità di generare immagini realistiche di piante e frattali. I Sistemi di Lindenmayer, o L-System, sono un metodo formale introdotto dal biologo Aristid Lindenmayer nel 1968 per modellare lo sviluppo delle piante. L-System è un tipo di sistema di riscrittura e di grammatica formale, utilizzato per costruire oggetti complessi partendo da un oggetto semplice e sostituendo ricorsivamente le parti secondo le istruzioni fornite da un insieme di regole di riscrittura. 

## Riferimenti progettuali
Il principale riferimento progettuale di questo lavoro è il metodo di Lindenmayer per la [modellazione delle piante e dei frattali](http://algorithmicbotany.org/). Il progetto si ispira ai numerosi sviluppi e applicazioni degli L-System nella produzione di immagini realistiche di piante e nella generazione di curve frattali.

## Design dell’interfaccia e modalità di interazione

Ogni sezione è progettata come una pagina separata per consentire l'uso del progetto come presentazione consentendo agli utenti di esplorare le origini e gli sviluppi degli L-System. La pagina principale presenta link di navigazione verso diverse sezioni che approfondiscono i vari aspetti degli L-System. La navigazione è posizionata nella parte inferiore della pagina, permettendo agli utenti di spostarsi facilmente tra le diverse sezioni del progetto. La sezione **esempio** contiene un albero frattale interattivo che si genera grazie ad un bottone.


## Tecnologia usata
Per sviluppare il progetto sui Sistemi di Lindenmayer, sono state utilizzati HTML e CSS per la sezione esempio invece ho integrato uno script che utilizza la libreria p5.js che facilita e permette la visualizzazione dei frattali e delle piante generate dagli L-System.


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
Il progetto sui Sistemi di Lindenmayer è rivolto a studenti interessati a esplorare e comprendere i principi degli L-System. Il contesto d'uso principale è un ambiente educativo o di ricerca, dove gli utenti possono interagire con il progetto per approfondire la loro conoscenza degli algoritmi botanici e delle strutture frattali.
