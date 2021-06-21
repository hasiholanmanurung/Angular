import { Component, OnInit } from '@angular/core';
import { buku } from '../model/buku';
import { BUKU } from './sample-buku';
import { BukuService } from '../services/buku.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {


  abuku: buku[] = [];

  selectedBuku?: buku;
  constructor(
    private bukuService: BukuService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // this.getAllBuku();
  }

  // onSelect(book: buku): void {
  //   this.selectedBuku = book;
  //   this.messageService.add(`BukuComponent: Selected Buku id=${book.id}`);
  // }


  onSelect(bukuId: number){
    // this.selectedBuku = book;
    this.bukuService.getBuku(bukuId).subscribe(returnData =>{
      this.selectedBuku = returnData;
      console.log(returnData);
    })
    this.messageService.add(`BukuComponent: Selected Buku id=${bukuId}`);
  }
  
  // this.selectedBook = book;
  // console.log(this.selectedBook);
  
  
  getAllBuku():void {
    // console.log("test");
    this.bukuService.getAllBuku().subscribe(returnData => this.abuku=returnData);
    this.messageService.add('BukuComponent: Buku Fetched');
    console.log(this.abuku);
  }

 

}

