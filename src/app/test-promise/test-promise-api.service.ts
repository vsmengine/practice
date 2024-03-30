import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  username: string;
  name?: string;
  email?: string;
}

export interface IPost {
  id: number;
  userId: number;
  title?: string;
  body?: string;
}

export interface IUserWithPost {
  id: number;
  username: string;
  posts?: Array<IPost>
}

@Injectable({
  providedIn: 'root'
})
export class TestPromiseApiService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor() { }

  public getUserById(id: number): Promise<IUser> {
    return fetch(`${this.API_URL + 'users/' + encodeURIComponent(id)}`)
    .then((res: Response) => {
      if(res.ok) {
        return res.json();
      }
      throw Error('Error exsists in the API')
    })
    .then((body) => {
      return body as IUser;
    })
  }

  public getPostsForUser(userId: number): Promise<Array<IPost>> {
    return fetch(this.API_URL + 'posts?userId=' + encodeURIComponent(userId))
    .then((res: Response) => {
        if(res.ok) {
          return res.json();
        }
        throw Error('Error exsists in the API')
    }).then((body) => {
      return body as Array<IPost> 
    });
  }
  public async getPostsForUserAwait(userId: number): Promise<Array<IPost>> {
    const res = fetch(this.API_URL + 'posts?userId=' + encodeURIComponent(userId));
    const body = (await res).json();
    const data = await body as Array<IPost>;
    return data;
  }

  public getUserWithPost(userId: number): Promise<IUserWithPost> {
    return Promise.all([
      this.getUserById(userId),
      this.getPostsForUser(userId)
    ])
    .then(([user, posts]) => {
      return this.mapUserAndPosts(user, posts) as IUserWithPost
    })
  }

  private mapUserAndPosts(user: IUser, posts: Array<IPost>): IUserWithPost {
    return {
      id: user.id,
      username: user.username,
      posts: posts
    }
  }
  
}
