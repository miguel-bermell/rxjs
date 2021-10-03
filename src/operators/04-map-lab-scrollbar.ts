import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a pharetra orci. Nulla in turpis ultricies, laoreet diam ut, venenatis ex. Praesent auctor nunc laoreet, convallis lorem placerat, ultrices dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ante diam, dapibus nec placerat vel, ornare vestibulum est. Sed fringilla ante ut arcu tempor, at dignissim nulla venenatis. Nunc sollicitudin fermentum pretium. Cras eu leo sollicitudin, laoreet nisi a, rhoncus nibh. Aenean sed vestibulum diam. Morbi vel pellentesque augue. Duis euismod elit at enim euismod, id venenatis nisi porta. Vestibulum vehicula non neque eget scelerisque.
<br><br>
Ut turpis libero, viverra id sagittis nec, efficitur non urna. Quisque sagittis maximus arcu at suscipit. Morbi suscipit, ipsum ac vestibulum auctor, lectus mauris condimentum mauris, sed dapibus enim risus a sem. Ut pretium volutpat molestie. Donec non pellentesque erat. Nunc vitae augue ut lacus commodo condimentum. Mauris ut dui mi. Aenean sit amet elementum enim. Vivamus vulputate iaculis mauris a accumsan. In non mi efficitur, ultrices neque quis, accumsan augue. Nam porta, tortor hendrerit sodales tempor, justo sem dictum ex, a suscipit metus est at orci.
<br><br>
Donec feugiat fermentum purus, a condimentum magna condimentum ut. Morbi scelerisque ex viverra, tincidunt eros a, cursus magna. Donec sed sem leo. Duis in lobortis mi. Fusce luctus, urna a feugiat consequat, quam nulla bibendum dui, nec fringilla nibh nulla quis leo. Nullam eleifend leo vitae sollicitudin hendrerit. Cras sit amet mi metus. Aenean at efficitur erat, eu tempor nulla. Mauris vulputate felis vel odio placerat egestas. Etiam magna nulla, consequat euismod viverra blandit, ultricies eget tellus. Pellentesque quis vestibulum nisi. Duis ut nunc libero. Etiam pharetra pharetra sem. Phasellus aliquam dapibus facilisis. Cras eu aliquam eros.
<br><br>
Donec ac ex eu ligula congue consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Fusce et posuere justo. Nulla ligula sem, dapibus sed diam ultricies, lobortis posuere justo. Aliquam porta viverra eros iaculis euismod. Nunc consectetur faucibus neque et feugiat. In maximus eu sapien ut malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br><br>
Integer vel odio quam. Nunc venenatis tortor ut ipsum dictum, et semper dolor faucibus. Praesent facilisis sit amet sem eget blandit. Cras elementum urna dolor, at aliquet turpis tincidunt at. Fusce condimentum commodo sapien, feugiat ornare libero efficitur rutrum. Nulla sollicitudin, tortor eget gravida suscipit, est augue hendrerit ligula, ac finibus nulla diam in nibh. Etiam at fringilla justo. Morbi pretium porta vehicula. Morbi faucibus luctus mi, sit amet malesuada felis. Etiam commodo sem quis neque ullamcorper pretium. Sed orci enim, ullamcorper non scelerisque et, semper id magna.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a pharetra orci. Nulla in turpis ultricies, laoreet diam ut, venenatis ex. Praesent auctor nunc laoreet, convallis lorem placerat, ultrices dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ante diam, dapibus nec placerat vel, ornare vestibulum est. Sed fringilla ante ut arcu tempor, at dignissim nulla venenatis. Nunc sollicitudin fermentum pretium. Cras eu leo sollicitudin, laoreet nisi a, rhoncus nibh. Aenean sed vestibulum diam. Morbi vel pellentesque augue. Duis euismod elit at enim euismod, id venenatis nisi porta. Vestibulum vehicula non neque eget scelerisque.
<br><br>
Ut turpis libero, viverra id sagittis nec, efficitur non urna. Quisque sagittis maximus arcu at suscipit. Morbi suscipit, ipsum ac vestibulum auctor, lectus mauris condimentum mauris, sed dapibus enim risus a sem. Ut pretium volutpat molestie. Donec non pellentesque erat. Nunc vitae augue ut lacus commodo condimentum. Mauris ut dui mi. Aenean sit amet elementum enim. Vivamus vulputate iaculis mauris a accumsan. In non mi efficitur, ultrices neque quis, accumsan augue. Nam porta, tortor hendrerit sodales tempor, justo sem dictum ex, a suscipit metus est at orci.
<br><br>
Donec feugiat fermentum purus, a condimentum magna condimentum ut. Morbi scelerisque ex viverra, tincidunt eros a, cursus magna. Donec sed sem leo. Duis in lobortis mi. Fusce luctus, urna a feugiat consequat, quam nulla bibendum dui, nec fringilla nibh nulla quis leo. Nullam eleifend leo vitae sollicitudin hendrerit. Cras sit amet mi metus. Aenean at efficitur erat, eu tempor nulla. Mauris vulputate felis vel odio placerat egestas. Etiam magna nulla, consequat euismod viverra blandit, ultricies eget tellus. Pellentesque quis vestibulum nisi. Duis ut nunc libero. Etiam pharetra pharetra sem. Phasellus aliquam dapibus facilisis. Cras eu aliquam eros.
`

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append( progressBar );

// cálculo
const calcPercentajeScroll = ( event ) => {
  console.log('Event', event)

  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;

  console.log({scrollTop,scrollHeight,clientHeight})

  return ( scrollTop / ( scrollHeight - clientHeight )) * 100;
}

// Streams
const scroll$ = fromEvent( document, 'scroll' );
// scroll$.subscribe( console.log )

const progress$ = scroll$.pipe(
  map( calcPercentajeScroll ),
  tap( console.log )
);

progress$.subscribe( porcentaje => {
  progressBar.style.width = `${ porcentaje }%`
})