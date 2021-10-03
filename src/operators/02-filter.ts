import { from, fromEvent, Observable, range } from 'rxjs'
import { filter, map } from 'rxjs/operators'

// range(1, 10).pipe(
//   filter(x => x % 2 === 0)
// ).subscribe(console.log)

range(1, 10).pipe(
  filter((val, i) => {
    console.log('index', i)
    return val % 2 === 0
  })
)
// .subscribe(console.log)

interface Personaje {
  tipo: string,
  nombre: string
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Robin'
  },
  {
    tipo: 'villano',
    nombre: 'Joker'
  },
]


from( personajes ).pipe(
  filter( personaje => personaje.tipo === 'heroe' )
).subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
  map( event => event.code ),
  filter( key => key === 'Enter' )
);

keyup$.subscribe( console.log );
