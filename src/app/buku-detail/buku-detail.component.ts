import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BukuComponent } from '../buku/buku.component';
import { buku } from '../model/buku';
import { BukuService } from '../services/buku.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-buku-detail',
  templateUrl: './buku-detail.component.html',
  styleUrls: ['./buku-detail.component.css']
})
export class BukuDetailComponent implements OnInit {

  @Input() book?: buku;
  constructor(
    private bukuService: BukuService,
    private messageService: MessageService,
    private bukuComponent: BukuComponent
  ) { }

  ngOnInit(): void {
  }

  save(): void{
    this.messageService.add('Updating Buku');

    if(this.book){
      this.bukuService.updateBuku(this.book).subscribe();
      console.log(this.book);
      this.goBack();
        window.location.reload();
    }
    else{
      this.messageService.add('Buku is NOT updated...');
    }
  }

   delete(bukuId:number):void{
    
    if(confirm(`Are you sure want to delete Buku with id: ${bukuId}?`)){
        this.messageService.add('Deleted Buku');
        this.bukuService.deleteBuku(bukuId).subscribe();  

        this.goBack();
        window.location.reload();
  }
  else{
        this.messageService.add('Buku is NOT deleted...');
  }
}

  goBack(){
    this.bukuComponent.ngOnInit();
    this.bukuComponent.getAllBuku();
    this.book= undefined;
  }




}
