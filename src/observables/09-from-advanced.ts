import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia de valores
 * from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
};

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};
const miIterador = miGenerador();

// for (let id of miIterador) {
//     console.log(id);
// }

from (miIterador).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
const source$ = from( fetch('https://api.github.com/users/miguel-bermell') );

// source$.subscribe( async (resp) => {
  
//   const dataResp = await resp.json();
//   console.log(dataResp);
// })

// source$.subscribe(observer);