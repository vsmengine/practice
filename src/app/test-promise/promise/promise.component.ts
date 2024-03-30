import { Component, inject } from '@angular/core';
import { TestPromiseApiService } from '../test-promise-api.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
  private testPromiseApi = inject(TestPromiseApiService);

  constructor() {
    this.testPromise();
  }

  private testPromise() {
    // this.testPromiseApi.getUserById(1); // Hard-coded
    // this.testPromiseApi.getPostsForUser(1); // Hard-coded
    // this.testPromiseApi.getPostsForUserAwait(1); // Hard-coded
    // this.testPromiseApi.getUserWithPost(1); // Hard-coded

    const promise: Promise<any> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: 'qaz'})
        //reject('Promise rejected error')
      }, 1000);
    });

    promise
    .then(
      (fulfilled) => {
        console.log("&&&& fulfilled 1 &&&", fulfilled)
      },
      (rejected) => {
        console.log("&&&& rejected 1 &&&", rejected)
        return new Promise((resolve, reject) => {
          reject('Has an error')
        })
      }
    )
    .then(
      (fulfilled) => {
        console.log("&&&& fulfilled 2 &&&", fulfilled)
      },
      (rejected) => {
        console.log("&&&& rejected 2 &&&", rejected)
      }
    )
    .catch((error) => {
      console.log("**** error ****", error)
    })
    .finally(() => {
      console.log("*** Promise finally ****")
    })
  }
}
