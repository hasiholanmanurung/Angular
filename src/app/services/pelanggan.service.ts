import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { pelanggan } from '../model/pelanggan';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {
  private svcUrl = "http://localhost:8081/get";
  private svcDeletePel = "http://localhost:8081/delete/"

  private httpOption= {
    headers:new HttpHeaders(
    {'Content-Type': 'application/json'})
  }
  
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

  getBuku(pelangganId:number): Observable <pelanggan> {
    const svcGetPelangganById: string = `http://localhost:8081/getsid/${pelangganId}`;

    const buku:Observable<pelanggan> = this.httpClient.get<pelanggan>(svcGetPelangganById);
    
    return buku;
  }

  updatePelanggan(pelanggan: pelanggan): Observable<any>{
    const svcPutUrl: string = `http://localhost:8081/edit/${pelanggan.id}`;
    return this.httpClient.put(svcPutUrl, pelanggan, this.httpOption);
  }

  deletePelanggan(pelangganid: number): Observable<pelanggan>{
    // const svcDeleteUrl: string = `http://localhost:8086/delete/${buku.id}`;
    // return this.httpClient.delete<buku>(this.svcDelete+`${bukuId}`, this.httpOption)
    return this.httpClient.delete<pelanggan>(this.svcDeletePel+`${pelangganid}`, this.httpOption)
    
  }


}
