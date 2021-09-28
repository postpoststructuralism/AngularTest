import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-related-devices',
  templateUrl: './related-devices.component.html',
  styleUrls: ['./related-devices.component.css']
})
export class RelatedDevicesComponent implements OnInit {  
  @Input() device?: Device;

  faInfoCircle = faInfoCircle;
  faMobileAlt = faMobileAlt;
  faDesktop = faDesktop;
  faTabletAlt = faTabletAlt;
  
  constructor( 
    private deviceService: DeviceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDevice();
  }

  getDevice(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getDevice(id).subscribe(device => this.device = device);
  }

}
