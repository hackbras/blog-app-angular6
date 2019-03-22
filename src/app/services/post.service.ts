import { Injectable } from '@angular/core';
import { Post } from '../types';
import { endpointApiUrl } from '../endpointApiUrl';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:Http) { }

  listAll():Promise<Post[]>{
    return new Promise(async (resolve,reject)=>{
      let response = await this.http.get(`${endpointApiUrl}/posts`)
      .toPromise()

      if (response.status == 200) {
        resolve(response.json())
      } else {
        reject(response.text)
      }
    })
  }

}
