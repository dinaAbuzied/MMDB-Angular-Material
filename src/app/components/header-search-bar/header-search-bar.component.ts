import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { MovieShortDetails } from '../../interfaces/movies.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {
  @Output() selectMovie: EventEmitter<number> = new EventEmitter();
  searchForm = new FormGroup({
    searchControl: new FormControl('', Validators.required)
  });
  isSearching: boolean;
  searchResaultSub: Subscription;

  get searchControl() { return this.searchForm.get('searchControl'); }

  searchResults: Array<MovieShortDetails> = [];
  showMore: boolean;

  constructor(private movies: MoviesService, private router: Router) { }

  ngOnInit() {
  }

  onOptionSelected({ option }) {
    this.selectMovie.emit(option.value);
    setTimeout(() => {
      this.searchControl.setValue('');
      this.searchResults = [];
      this.showMore = false;
    }, 0);
  }

  onSearch(str: string) {
    if (str.length > 0) {
      this.isSearching = true;
      this.searchResaultSub = this.movies.getSearchResault(str).subscribe(data => {
        this.showMore = data.length > 5;
        this.searchResults = data.length > 5 ? data.slice(0, 5) : data;
        this.isSearching = false;
        this.searchResaultSub.unsubscribe();
      });
    } else {
      this.searchResults = [];
      this.showMore = false;
      if (this.searchResaultSub) {
        this.searchResaultSub.unsubscribe();
      }
    }
  }

  onSubmit() {
    this.router.navigate(['/search'], { queryParams: { query: this.searchControl.value } });
  }
}
