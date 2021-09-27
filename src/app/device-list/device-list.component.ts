import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices: Device[] = [];
  faInfoCircle = faInfoCircle;
  faMobileAlt = faMobileAlt;
  faSearch = faSearch;
  faDesktop = faDesktop;
  faTabletAlt = faTabletAlt;
  searchText = '';

  message: string;

  @Input() messageFromSearchComponent: string;

  constructor(
    private deviceService: DeviceService,
    public filterPipe: FilterPipe) { }

   
  ngOnInit(): void {
    this.getDevices();
    this.deviceService.currentMessage.subscribe(searchText => this.message = searchText);
  }

  onSearchTermChange(value: string) {
    this.searchText = value;
    alert("device-list");
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }

  clearSearchText(): void {
    this.searchText = "";
    
  }
}
