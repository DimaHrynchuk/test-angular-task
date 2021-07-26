import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/domain/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: Book[];
  tableColumns: string[] = ['name', 'author', 'year'];

  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.service.findBooks().subscribe((books: Book[]) => {
      this.data = books;
    });
  }

}
