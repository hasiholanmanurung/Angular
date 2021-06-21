import { Component, OnInit } from '@angular/core';
import { pelanggan } from '../model/pelanggan';
import { Input } from '@angular/core';
import { MessageService } from '../services/message.service';
import { PelangganService } from '../services/pelanggan.service';

@Component({
  selector: 'app-pelanggan-detail',
  templateUrl: './pelanggan-detail.component.html',
  styleUrls: ['./pelanggan-detail.component.css']
})
export class PelangganDetailComponent implements OnInit {

  @Input() apelanggan?: pelanggan;
  constructor(
    private messageService: MessageService,
    private pelangganService: PelangganService

  ) { }

  ngOnInit(): void {
  }

  save(): void{
    this.messageService.add('Updating Buku');

    if(this.apelanggan){
      this.pelangganService.updatePelanggan(this.apelanggan).subscribe();
      console.log(this.apelanggan);
    }
  }

  delete(pelangganId:number):void{
    
    if(confirm(`Are you sure want to delete Buku with id: ${pelangganId}?`)){
        this.messageService.add('Deleted Pelanggan');
        this.pelangganService.deletePelanggan(pelangganId).subscribe();  
  }
  else{
        this.messageService.add('Pelanggan is NOT deleted...');
  }
}

}
