/**
 * Uebung 1: Variablen
 */

/**
 * 1) Eine Variable land erstellen
 */
//ToDo: füge ab hier Deinen Code ein
let land="Spanien"

/**
 * 2) Die Variable ausgeben
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");
  console.debug(land);
}

/**
 * 3) Erstelle die Variablen
 */
//ToDo: füge ab hier Deinen Code ein
let stadt, berg, fluss
/**
 * 4) Gebe den Variablen Werte
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");
  //ToDo: füge ab hier Deinen Code ein
let stadt="Freudenstadt"
let berg="Mount Everest Schwaben"
let fluss="Neckar"
  console.debug(stadt,", ", berg,", ", fluss);
}

/**
 * 5) Erstelle die Variablen mit verschiedenem Typ
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  //ToDo: füge ab hier Deinen Code ein
let name="Michael Hornung"
let alter=42
let groesseInMeter=1.78
let amLeben=true
  console.debug(name);
  console.debug(alter);
  console.debug(groesseInMeter);
  console.debug(amLeben);
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe2();
  aufgabe4();
  aufgabe5();
}
main();