import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  searchText = '';

  //private location : Location;

  constructor(
    private filterPipe: FilterPipe) { }

  ngOnInit(): void {
  }

  onGoBack(): void {
    //this.location.back();
    alert("go back");
  }

  onGoForward(): void {
    //this.location.back();
    alert("go forward");
  }

  onReload(): void {
    alert("reload");
  }

  onCancel() : void {
    alert("cancel");
  }
}
