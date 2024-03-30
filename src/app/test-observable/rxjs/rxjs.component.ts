import { Component, inject } from '@angular/core';
import { filter, first, firstValueFrom, forkJoin, from, last, lastValueFrom, map, mergeMap, of, range, skip, take, tap, toArray } from 'rxjs';
import { TestObservableApiService } from '../test-observable-api.service';

interface IPostWithUser {
  postId: number;
  userId: number;
  title?: string;
  body?: string;
  user: {
    name?: string;
    username?: string;
    email?: string;
  }
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {
  private apiService = inject(TestObservableApiService);

  constructor() {
    this.testRxjs();
  }

  private async testRxjs() {
    
    const observable = from(this.apiService.getPosts().pipe(mergeMap((posts) => from(posts))));
    const data1 = await firstValueFrom(observable);
    const data2 = await lastValueFrom(observable);
    console.log('data', data1, data2)


    // //Get users (promise -> observable)
    // from(fetch('https://jsonplaceholder.typicode.com/users'))
    // .pipe(
    //   mergeMap((res: Response) => res.json()),
    //   tap((res) => {
    //     console.log(res)
    //   })
    // )
    // .subscribe()
    

    // Observable pipe chaining
    // this.apiService.getPosts()
    // .pipe(
    //   mergeMap((posts) => from(posts)),
    //   filter((post) => post && post.id !== null),
    //   mergeMap((post) => forkJoin({
    //     post: of(post),
    //     user: this.apiService.getUserById(post.userId)
    //   })),
    //   map(({post, user}) => {
    //     return {
    //       postId: post.id,
    //       userId: user.id,
    //       title: post.title,
    //       body: post.body,
    //       user: {
    //         name: user.name,
    //         username: user.username,
    //         email: user.email
    //       }
    //     } as IPostWithUser
    //   }),
    //   toArray(),
    //   map((posts: IPostWithUser[]) => posts.sort((a,b) => a.postId - b.postId))
    // )
    // .subscribe({
    //   next(x) {
    //     console.log("x", x)
    //   },
    //   complete() {},
    //   error() {}
    // });


    // create observables
    // of(1, 2, 3).subscribe({
    //   next: (x) => { console.log("x", x)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });
    // of([1, 2, 3]).subscribe({
    //   next: (y) => { console.log("y", y)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // from([1, 2, 3]).subscribe({
    //   next: (z) => { console.log("z", z)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 10).subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // Transform data
    // of('a', 'b', 'c')
    // .pipe(
    //   map(x => x.toLocaleUpperCase())
    // )
    // .subscribe({
    //   next: (x) => { console.log("x", x)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 5)
    // .pipe(
    //   tap(w => console.log("w", w))
    // )
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 5)
    // .pipe(
    //   filter((w) => w % 2 === 0)
    // )
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 5)
    // .pipe(
    //   first()
    // )
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 5)
    // .pipe(
    //   last()
    // )
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 5)
    // .pipe(
    //   take(3)
    // )
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 5)
    // .pipe(
    //   skip(3)
    // )
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // range(1, 10)
    // .pipe(
    //   skip(3),
    //   take(5),
    //   filter(x => x % 2 === 0),
    //   map(x => 'A' + x)
    // )
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });


    // const pipe1 = range(1, 10)
    // .pipe(
    //   skip(3),
    //   take(5)
    // );

    // const pipe2 = pipe1
    // .pipe(
    //   filter(x => x % 2 === 0),
    //   map(x => 'A' + x)
    // );
    
    // pipe2
    // .subscribe({
    //   next: (w) => { console.log("w", w)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

    // pipe1
    // .subscribe({
    //   next: (v) => { console.log("v", v)},
    //   complete: () => { console.log("Complete")},
    //   error: (error) => console.log(error)
    // });

  }
}
