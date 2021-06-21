import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { pelanggan } from '../model/pelanggan';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {
  private svcUrl = "http://localhost:8081/get";
  
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  // getAllPelanggan(): Observable <pelanggan[]>{
   
  //   const pelanggan:Observable<pelanggan[]> = this.httpClient.get<pelanggan[]>(this.svcUrl);
  //   return pelanggan;
  // }

  getAllPelanggan(): Observable <pelanggan[]>{
    // const buku = of(HEROES);
    const pelanggan:Observable<pelanggan[]> = this.httpClient.get<pelanggan[]>(this.svcUrl);
    return pelanggan;
  }
}
