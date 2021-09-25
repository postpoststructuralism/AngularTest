import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';

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
  searchText = '';

  constructor(
    private deviceService: DeviceService,
    private filterPipe: FilterPipe) { }

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }

  clearSearchText(): void {
    this.searchText = "";
    
  }
}
