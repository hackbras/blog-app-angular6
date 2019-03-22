import { Injectable } from '@angular/core';
import { Post } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  listAll():Promise<Post[]>{
    return new Promise(async (resolve,reject)=>{

    })
  }

}
