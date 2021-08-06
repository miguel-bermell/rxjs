import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error :", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // crear un contador
  let i = 0;

  const interval = setInterval(() => {
    subscriber.next(i++);
    console.log(i);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  //remove intervalo
  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

// const subscription1 = intervalo$.subscribe((num) => {
//   console.log("Num:", num);
// });
const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// Encadenar suscripciones
subscription1.add(subscription2).add(subscription3);

// Cancelar subscription
setTimeout(() => {
  subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log("intervalo se ha completado");
}, 6000);
