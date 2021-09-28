import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  @Input() device?: Device;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDevice();
  }

  getDevice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getDevice(id).subscribe(device => this.device = device);

    if (this.device !== undefined) {
      console.log("device is defined.");
      if (this.device.relatedDevices !== undefined) {
        console.log("releatedDevices are defined.");
        if (this.device.relatedDevices.length === 0) {
          console.log("but it's empty");
          this.device.relatedDevices = [];
        }
      }
    }

    //console.log(this.device);
  }

  goBack(): void {
    this.location.back();
  }
}
