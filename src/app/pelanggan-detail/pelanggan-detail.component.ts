import { Component, OnInit } from '@angular/core';
import { pelanggan } from '../model/pelanggan';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pelanggan-detail',
  templateUrl: './pelanggan-detail.component.html',
  styleUrls: ['./pelanggan-detail.component.css']
})
export class PelangganDetailComponent implements OnInit {

  @Input() apelanggan?: pelanggan;
  constructor() { }

  ngOnInit(): void {
  }

}
