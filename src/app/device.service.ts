import { Injectable } from '@angular/core';
import { Device } from './device';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


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
    var devices = this.http.get<Device[]>(this.baseUrl)
      .pipe(catchError(this.handleError<Device[]>('getDevices', [])));
    return devices;
  }

  getDevice(id: number): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Device>(url)
      .pipe(catchError(this.handleError<Device>(`getDevice id${id}`)));
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`DeviceService: $(message)`);
  }
}
