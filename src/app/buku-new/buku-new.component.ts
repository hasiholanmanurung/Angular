import { Component, Input, OnInit } from '@angular/core';
import { BukuService } from '../services/buku.service';

@Component({
  selector: 'app-buku-new',
  templateUrl: './buku-new.component.html',
  styleUrls: ['./buku-new.component.css']
})
export class BukuNewComponent implements OnInit {

  @Input() isVisible?: boolean;

  constructor(private bukuService: BukuService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.isVisible = false;
  }

  save(buku:any){
    // console.log(buku);

    if(buku) {
      this.bukuService.addBuku(buku).subscribe();
    }
  }
}
