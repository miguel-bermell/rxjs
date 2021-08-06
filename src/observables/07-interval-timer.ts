import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

/**
 * Interval -> async
 */

const todayIn5 = new Date(); // ahora

todayIn5.setSeconds(todayIn5.getSeconds() + 5); // programamos cuando emitir el valor

// const interval$ = interval(1000); // emite valores a intervalo de 1000ms

// const timer$ = timer(2000); // emite valores en 2s y se completa

// const timer$ = timer(2000, 1000); // -> creamos un interval que inicia en 2s y luego la secuencia es de 1sec

const timer$ = timer(todayIn5);

console.log("inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("fin");
