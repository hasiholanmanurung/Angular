import { Component, Input, OnInit } from '@angular/core';
import { BukuService } from '../services/buku.service';
import { BukuComponent } from '../buku/buku.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-buku-new',
  templateUrl: './buku-new.component.html',
  styleUrls: ['./buku-new.component.css']
})
export class BukuNewComponent implements OnInit {

  @Input() isVisible?: boolean;

  constructor(
    private bukuService: BukuService,
    private bukuComponent: BukuComponent,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
  }

  goBack() {
    // this.isVisible = false;
    // this.bukuComponent.ngOnInit();
    // this.bukuComponent.getAllBuku();
    this.bukuComponent.formVisible =false;
  }

  save(buku:any){
    // console.log(buku);

    if(buku) {
      this.bukuService.addBuku(buku).subscribe(
        ()=>{
          // console.log(x);
          this.bukuService.getAllBuku().subscribe(
            returnData=>{
              this.bukuComponent.abuku=returnData.sort((x1,x2)=>{return x1.id - x2.id});
            }
          );
         
          this.goBack();
        }
      );
     
    }
    else{
      this.messageService.add('Buku is NOT updated...');
    }
  }
}
