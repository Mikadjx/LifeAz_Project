import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-defibrilateur',
  templateUrl: './defibrilateur.component.html',
  styleUrls: ['./defibrilateur.component.css']
})

// variable permettant de de dynamiser le html 

export class DefibrilateurComponent implements OnInit  {

  public logo_lifeaz ="assets/LIFEAZ.png"
  public logo_menu ="assets/icon_menu.png"
  public logo_check="assets/icon_check.png"
  public logo_danger ="assets/icon_danger.png"
  public logo_inter ="assets/icon_inter.png"
  public logo_spark="assets/icon_spark.png"
  public logo_loc="assets/icon_loc.png"
  public logo_line2="assets/Line 2.png"

  //variable de notre base de données LifeAz 
  
  public monTitre : string;
  public Serial : any;
  public locationName: any;
  public locationAddr: any;
  public state: any;
  public electrodesexpiry: any;

  constructor( http: HttpClient){
    this.monTitre = "MES DÉFIBRILATEURS";
  }

  ngOnInit(): void{
  
  }



}




