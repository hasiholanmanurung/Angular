import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { buku } from '../model/buku';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class BukuService {
  private svcUrl = "http://localhost:8085/gets"
  private svcDelete = "http://localhost:8086/delete//"


  private httpOption= {
    headers:new HttpHeaders(
    {'Content-Type': 'application/json'})
  }
  

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
  ) { }

  getAllBuku(): Observable <buku[]>{
    // const buku = of(HEROES);
    const buku:Observable<buku[]> = this.httpClient.get<buku[]>(this.svcUrl);
    return buku;
  }

  getBuku(bukuId:number): Observable <buku> {
    const svcGetBukuById: string = `http://localhost:8085/getsid/${bukuId}`;

    const buku:Observable<buku> = this.httpClient.get<buku>(svcGetBukuById);
    // const buku:Observable<buku> = this.httpClient.get<buku>(this.svcUrl + `${bukuId}`);
    
    // .pipe(
    //   tap(x => this.log('Buku Fetched!')),
    //   catchError(this.handleError<buku>(`getBuku id = ${bukuId}`))
    //   );
    
    return buku;
  }

  updateBuku(buku: buku): Observable<any>{
    const svcPutUrl: string = `http://localhost:8085/edit/${buku.id}`;
    return this.httpClient.put(svcPutUrl, buku, this.httpOption);
  }


  deleteBuku(bukuId: number): Observable<buku>{
    // const svcDeleteUrl: string = `http://localhost:8086/delete/${buku.id}`;
    // return this.httpClient.delete<buku>(this.svcDelete+`${bukuId}`, this.httpOption)
    return this.httpClient.delete<buku>(this.svcDelete+`${bukuId}`, this.httpOption)
    
  }


}
