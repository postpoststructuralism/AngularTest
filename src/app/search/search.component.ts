import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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


  @Input() valueInParentComponent: string;
  @Output() onValueInParentComponentChanged = new EventEmitter<string>();

  constructor(private filterPipe: FilterPipe) { }

  ngOnInit(): void {
  }

  onChange(){
    this.onValueInParentComponentChanged.emit(this.searchText);
  }

  onCancel() : void {
    alert("cancel");
  }
}
