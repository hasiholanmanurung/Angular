import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of, pipe } from 'rxjs';
import { buku } from '../model/buku';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BukuService {
  private svcUrl = "http://localhost:8085/gets"
  private svcDelete = "http://localhost:8085/delete/"
  private svcAdd = "http://localhost:8085/create"


  private httpOption= {
    headers:new HttpHeaders(
    {'Content-Type': 'application/json'})
  }

  private log(message:string){
    this.messageService.add(`BukuService: ${message}`);
  };

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
  ) { }

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

  getAllBuku(): Observable <buku[]>{
    const buku:Observable<buku[]> = this.httpClient.get<buku[]>(this.svcUrl)
    .pipe(
      tap(x => this.log('Buku Fetched!')),
      catchError(this.handleError<buku[]>('getAllBuku', []))
    );

    return buku;
  }

  getBuku(bukuId:number): Observable <buku> {
    const svcGetBukuById: string = `http://localhost:8085/getsid/${bukuId}`;

    const buku:Observable<buku> = this.httpClient.get<buku>(svcGetBukuById)
    .pipe(
      tap(x => this.log('Buku Fetched!')),
      catchError(this.handleError<buku>('getAllBuku'))
    );

    return buku;
  }

  updateBuku(buku: buku): Observable<any>{
    const svcPutUrl: string = `http://localhost:8085/edit/${buku.id}`;
  
    return this.httpClient.put(svcPutUrl, buku, this.httpOption)
    .pipe(
      tap(x => this.log('Buku Diupdate!')),
      catchError(this.handleError<buku>('getAllBuku'))
    );
  }


  deleteBuku(bukuId: number): Observable<buku>{
    return this.httpClient.delete<buku>(this.svcDelete+`${bukuId}`, this.httpOption)
    .pipe(
      tap(x => this.log(`Buku ${bukuId}Dihapus!`)),
      catchError(this.handleError<buku>('getAllBuku'))
    );
  }

  addBuku(buku: buku):Observable<buku>{
    return this.httpClient.post<buku>(this.svcAdd, buku ,this.httpOption)
    .pipe(
      tap((newBuku:buku)=> this.log(`New Buku judul=${newBuku.id} telah dibuat`)),
      catchError(this.handleError<buku>('addBuku'))
    );
  }
}
