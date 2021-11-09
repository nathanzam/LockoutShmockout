import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carrie',
  templateUrl: './carrie.component.html',
  styleUrls: ['./carrie.component.scss']
})
export class CarrieComponent implements OnInit {

  carries: string[] = [
    'https://media0.giphy.com/media/2IVLw7ncJJB5e/giphy.gif?cid=ecf05e47crncdio9d1am21343mxmb5viyoynp1spbv8hing8&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/21QEwX6bIZKOEs62fO/giphy.gif?cid=ecf05e47oj8dt2pkol5dmxq57v46tw50ub79kxobq8iqrepi&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/m1aKu8Dx6zKmc/giphy.gif?cid=ecf05e47oj8dt2pkol5dmxq57v46tw50ub79kxobq8iqrepi&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/l0MYuogw2hfCk9UI0/giphy.gif?cid=ecf05e477tv29b9q886cekk2506see0mwa0euqj9orlou8ht&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/qKDFrv7zdIUAo/giphy.gif?cid=ecf05e4758y4r2d6dod3qefyayh97vqtc1d5gc3mfelvvpfh&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/UGWvlN1BfwzPa/giphy.gif?cid=790b7611a570b871d5e5576b2652d823d02d4a750e0069a5&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/l0MYMMW0uhzTsuZVe/giphy.gif?cid=790b7611e0eabf5a9f7c2f027e67442360967923ffafe2c8&rid=giphy.gif&ct=g'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
