import { Injectable } from '@angular/core';
import { Device } from './device';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  //private baseUrl =  "https://localhost:44331/api/devices";  //DEV
  private baseUrl = "https://devicesapi20210927055518.azurewebsites.net/api/devices"; // PROD

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getDevices(): Observable<Device[]> {
    var devices = this.http.get<Device[]>(this.baseUrl);
    return devices;
  }

  getDevice(id: number): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Device>(url);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  private log(message: string) {
    this.messageService.add(`DeviceService: $(message)`);
  }
}
