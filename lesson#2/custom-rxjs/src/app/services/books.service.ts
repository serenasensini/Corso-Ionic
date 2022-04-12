import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../interfaces/book';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public httpClient: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(environment.backendURL + '/books');
  }
}
