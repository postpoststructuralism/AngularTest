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
  }

  goBack(): void {
    this.location.back();
  }
}
