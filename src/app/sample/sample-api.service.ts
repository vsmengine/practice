import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface IPost {
  id: number,
  userId: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private httplClient: HttpClient
  ) { }

  public fetchAllPosts(): Observable<Array<IPost>> {
    return this.httplClient.get<Array<IPost>>(
      `${this.API_URL + 'posts/'}`,
      {}
    )
  }

  public fetchUserPosts(id: number, data: any = null): Observable<Array<IPost>> {
    const httpParams = !data ? {} : this.getHttpParams(data);
    return this.httplClient.get<Array<IPost>>(
      `${this.API_URL + 'posts/' + id}`,
      {params: httpParams}
    )
  }

  public fetchAPaginatedPosts(currentPage = 1, itemsPerPage = 5): Observable<Array<IPost>> {
    return this.httplClient.get<Array<IPost>>(
      `${this.API_URL + 'posts/'}`,
      {}
    ).pipe(
      map((posts) => {
        const startIndex = currentPage*itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return posts.slice(startIndex, endIndex);
      })
    )
  }

  private getHttpParams(data: any): HttpParams {
    return new HttpParams({fromObject: data})
  }
}
