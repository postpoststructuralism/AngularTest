import { Injectable } from '@angular/core';
import { Device } from './device';
import { DEVICES } from './mock-devices';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  constructor(private messageService: MessageService) { }

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    return devices;
  }

  getDevice(id: number): Observable<Device> {
    const device = DEVICES.find(d => d.id === id)!;
    
    return of(device);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
