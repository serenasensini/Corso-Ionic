import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {Book} from '../interfaces/book';
import {BooksService} from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public searchField: FormControl;
  public filteredBooks$: Observable<Book[]>;

  constructor(private bookService: BooksService) {
    this.searchField = new FormControl('');
  }

  ngOnInit() {
    const books$ = this.bookService.getBooks();

    const searchTerm$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );


    //combine the books$ and searchTerm$ streams into a stream called filteredBooks$
    this.filteredBooks$ = combineLatest([books$, searchTerm$]).pipe(
      map(([books, searchTerm]) =>
        // for each book, check if the searchTerm matches the title (putting them to lowercase to avoid misunderstandings)
        books.filter(
          (book) =>
            searchTerm === '' ||
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );


  }
}
