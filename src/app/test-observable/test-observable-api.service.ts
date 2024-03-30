import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../sample/sample-api.service';
import { IUser } from '../test-promise/test-promise-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestObservableApiService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPosts(): Observable<Array<IPost>> {
    return this.httpClient.get<Array<IPost>>(this.API_URL + 'posts');
  }

  public getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.API_URL + 'users/' + encodeURIComponent(id)}`)
  }
}
