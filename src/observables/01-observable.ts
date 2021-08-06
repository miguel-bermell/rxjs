import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.warn("error [error]:", error),
  complete: () => console.info("complete [complete]"),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next("Ruben pipeando");
  subs.next("Ruben 2");
  subs.next("Ruben 3");

  // const a = undefined;
  // a.nombre = "miguel";
  // throw new Error("Error");
  subs.complete();

  subs.next("Ruben 4"); // no se emite
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (valor) => console.log("next" + valor),
//   (error) => console.warn("error" + error),
//   () => console.info("complete")
// );
