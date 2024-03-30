import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {

  constructor() {
    this.testObservable()
  }

  private testObservable() {
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.next(5);
    //     subscriber.complete();
    //   }, 1000)
    // });
    // const subscription = observable.subscribe({
    //   next(x) {
    //     console.log('result', x)
    //   },
    //   error(e) {
    //     console.log('error', e)
    //   },
    //   complete() {
    //     console.log('complete')
    //   }
    // });


    // const observable2 = from([1, 2, 3]);
    // const subscription = observable2.subscribe({
    //   next(y) {
    //     console.log(y);
    //   },
    //   complete() {
    //     console.log('complete');
    //   }
    // });


    const observable3 = new Observable((subscriber) => {
      const interval = setInterval(() => {
        subscriber.next('Heloooooo')
      }, 250);

      return function unsubscribe() {
        clearInterval(interval)
      }
    })
    const subscription = observable3.subscribe({
      next(z) {
        console.log(z);
      },
      complete() {
        console.log('complete');
      }
    })


    setTimeout(() => {
      subscription.unsubscribe();
    }, 1500)
  }
}
