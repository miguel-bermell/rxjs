import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);

/**
 * Range valor por defecto START: 0
 */

// const src$ = range(1, 100); // Poner 2 números (inicio y fin)
const src$ = range(1, 100, asyncScheduler);

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
