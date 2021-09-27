import { Component, OnInit, Output } from '@angular/core';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices: Device[] = [];
  faInfoCircle = faInfoCircle;
  faMobileAlt = faMobileAlt;
  faSearch = faSearch;
  faDesktop = faDesktop;
  faTabletAlt = faTabletAlt;
  searchText = '';
  valueInParentComponent = "";

  constructor(
    private deviceService: DeviceService, 
    private filterPipe: FilterPipe) { }

  
  ngOnInit(): void {
    this.getDevices();
  }

  onValueInParentComponentChanged(value: string) {
    this.searchText = value;
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }

  clearSearchText(): void {
    this.searchText = "";
    
  }
}
