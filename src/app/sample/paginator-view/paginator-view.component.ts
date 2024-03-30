import { Component, OnInit } from '@angular/core';
import { IPost, SampleApiService } from '../sample-api.service';
import { Observable, combineLatest, of, startWith, tap } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-paginator-view',
  templateUrl: './paginator-view.component.html',
  styleUrls: ['./paginator-view.component.scss']
})
export class PaginatorViewComponent implements OnInit {

  initPage = 1;
  initItemsPerPage = 5;
  currentPage$ = new FormControl(this.initPage, Validators.required);
  itemsPerPage$ = new FormControl(this.initItemsPerPage, Validators.required);
  posts$: Observable<Array<IPost>> = of([]);

  constructor(
    private sampleApiService: SampleApiService
  ) {
    this.loadPosts();
  }

  private loadPosts() {
    combineLatest([this.currentPage$.valueChanges, this.itemsPerPage$.valueChanges]).pipe(
      startWith([this.initPage, this.initItemsPerPage]),
      tap(([x, y]) => {
        this.posts$ = this.sampleApiService.fetchAPaginatedPosts(x!, y!);
      })
    ).subscribe();
  }

  ngOnInit(): void {}

}
