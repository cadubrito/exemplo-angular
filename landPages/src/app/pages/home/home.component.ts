import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public textoHeader:string = "Bem vindo";
  constructor() { }

  ngOnInit(): void {
  }

}
