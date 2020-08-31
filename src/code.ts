// import { Observable, Observer, fromEvent } from "rxjs";
// import "rxjs/add/operator/share";
// display on webpage
// import { Subject } from "rxjs/Subject";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
// import { ReplaySubject } from "rxjs/ReplaySubject";
import { AsyncSubject } from "rxjs/AsyncSubject";
const addItem = (val: any) => {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
};
// ? Cold Observables
// create an observable
// let observable = new Observable((observer: Observer<string>) => {
//   try {
//     observer.next("Hey, guys !");
//     observer.next("How are you ?");
//     let count = 0;
//     setInterval(() => {
//       observer.next(`I am good ${count++}`);
//     }, 1000);
//     // observer.complete();
//     // observer.next("This will not be sent");
//   } catch (error) {
//     observer.error(error);
//   }
// }).share();
// // subscribing to observable 1
// let subscription1 = observable.subscribe(
//   (x: string) => {
//     addItem(x);
//   },
//   (error) => {
//     addItem(error);
//   },
//   () => {
//     addItem("Completed !");
//   }
// );
// subscribing to observable 2
// let subscription2 = observable.subscribe(
//   (x: string) => {
//     addItem(x);
//   },
//   (error) => {
//     addItem(error);
//   },
//   () => {
//     addItem("Completed !");
//   }
// );
// subscription1.add(subscription2);
// setTimeout(() => {
//   // subscription1.unsubscribe();
//   let subscription2 = observable.subscribe((x: string) => {
//     addItem(`Subscriber 2 : ${x}`);
//   });
// }, 1000);
//
// ? Hot Observables
// let observable = fromEvent(document, "mousemove");

// setTimeout(() => {
//   let subscription = observable.subscribe((x: any) => {
//     console.log(x);
//     addItem(x);
//   });
// }, 2000);

// ? Subjects

// let subject = new Subject();

// subject.subscribe(
//   (data) => addItem(`Observer 1 : ${data}`),
//   (error) => addItem(error),
//   () => addItem("Observer 1 completed")
// );

// subject.next("The first thing has been sent");

// let subscription2 = subject.subscribe((data) =>
//   addItem(`Observer 2 : ${data}`)
// );

// subject.next("The second thing has been sent");
// subject.next("The third thing has been sent");

// subscription2.unsubscribe();

// subject.next("The fourth thing has been sent");

// ? BehaviorSubject

// let subject = new BehaviorSubject("First");

// subject.subscribe(
//   (data) => addItem(`Observer 1 : ${data}`),
//   (error) => addItem(error),
//   () => addItem("Observer 1 completed")
// );

// subject.next("The first thing has been sent");
// subject.next("Observer 2 is about to subscribe");

// let subscription2 = subject.subscribe((data) =>
//   addItem(`Observer 2 : ${data}`)
// );

// subject.next("The second thing has been sent");
// subject.next("The third thing has been sent");

// subscription2.unsubscribe();

// subject.next("The fourth thing has been sent");

// ? ReplaySubject

// let subject = new ReplaySubject(30, 500);

// subject.subscribe(
//   (data) => addItem(`Observer 1 : ${data}`),
//   (error) => addItem(error),
//   () => addItem("Observer 1 completed")
// );

// subject.next("The first thing has been sent");
// subject.next("Another thing has been sent");
// subject.next("Observer 2 is about to subscribe");

// let i = 1;

// setInterval(() => subject.next(i++), 100);

// setTimeout(() => {
//   let subscription2 = subject.subscribe((data) =>
//     addItem(`Observer 2 : ${data}`)
//   );
// }, 500);

// subject.next("The second thing has been sent");
// subject.next("The third thing has been sent");

// subscription2.unsubscribe();

// subject.next("The fourth thing has been sent");

// ? Async SUbject

let subject = new AsyncSubject();

subject.subscribe(
  (data) => addItem(`Observer 1 : ${data}`),
  (error) => addItem(error),
  () => addItem("Observer 1 completed")
);

let i = 1;

setInterval(() => subject.next(i++), 100);

setTimeout(() => {
  let subscription2 = subject.subscribe(
    (data) => addItem(`Observer 2 : ${data}`),
    (error) => addItem(error),
    () => addItem("Observer 2 completed")
  );
  subject.complete();
}, 500);
