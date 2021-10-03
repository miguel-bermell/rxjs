import { fromEvent, range } from "rxjs";
import {map, mapTo, pluck} from "rxjs/operators";

// range(1, 5).pipe(
//   map<number,number>(val => val * 10)
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// keyup$.pipe(
//   map(event => event.key)
// ).subscribe(console.log);


const keyupPluck$ = keyup$.pipe(
  pluck('target', 'baseURI')
);
// la , sería como el . para acceder a las propiedades del objeto.

const keyupMapTo$ = keyup$.pipe(
  mapTo('Tecla presionada')
);



keyupPluck$.subscribe(console.log);
keyupMapTo$.subscribe(code => console.log(code));
