import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from '../pipes/filter.pipe';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  faSearch = faSearch;
  searchText = '';
  
  message: string;

  @Input() valueInParentComponent: string;
  @Output() onValueInParentComponentChanged = new EventEmitter<string>();

  constructor(private filterPipe: FilterPipe, 
    private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.currentMessage.subscribe(message => this.message = message);
  }

  onChange(){
    //alert("Search onChange()");
    this.onValueInParentComponentChanged.emit(this.searchText);
  }

  onCancel() : void {
    alert("cancel");
  }
}
