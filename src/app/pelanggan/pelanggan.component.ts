import { Component, OnInit } from '@angular/core';
import { PelangganService } from '../services/pelanggan.service';
import { pelanggan } from '../model/pelanggan';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {

  apelanggan: pelanggan[] = [];

  selectedPelanggan?: pelanggan;

  constructor(
    private pelangganService: PelangganService,
    private messageService: MessageService
    
  ) { }

  ngOnInit(): void {
    // this.getAllPelanggan();
  }

  
  // onSelect(pel: pelanggan): void {
  //   this.selectedPelanggan = pel;
  //   this.messageService.add(`PelangganComponent: Selected Pelanggan id=${pel.id}`);
  // }


  onSelect(pelangganId: number){
    // this.selectedBuku = book;
    this.pelangganService.getBuku(pelangganId).subscribe(returnData =>{
      this.selectedPelanggan = returnData;
      console.log(returnData);
    })
    this.messageService.add(`PelangganComponent: Selected Pelanggan id=${pelangganId}`);
  }

  getAllPelanggan():void {
    // console.log("test");
    this.pelangganService.getAllPelanggan().subscribe(returnData => this.apelanggan=returnData);
    this.messageService.add('PelangganComponent: Pelanggan Fetched');
    console.log(this.apelanggan);
  }


}
