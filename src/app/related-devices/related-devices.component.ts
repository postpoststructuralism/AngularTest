import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';

@Component({
  selector: 'app-related-devices',
  templateUrl: './related-devices.component.html',
  styleUrls: ['./related-devices.component.css']
})
export class RelatedDevicesComponent implements OnInit {  
  @Input() device?: Device;

  constructor() { }

  ngOnInit(): void {
    this.device;
  }

}
