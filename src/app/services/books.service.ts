import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../domain/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  findBooks(): Observable<Book[]> {
    return of(this.hundredBooks());
  }

  hundredBooks(): Book[] {
    return this.mockBooks(5);
  }

  mockBooks(amount: number): Book[] {
    let books = [];
    for (let i = 0; i < amount; i++) {
      books.push(this.generateBook(i + 1, this.randomYear()));
    }
    return books;
  }

  randomYear() {
    return Math.floor(Math.random() * 20) + 1990;
  }

  generateBook(position: number, year: number) {
    return <Book>{
      name: "Book " + position,
      author: "Author " + position,
      year: year
    };
  }
}
