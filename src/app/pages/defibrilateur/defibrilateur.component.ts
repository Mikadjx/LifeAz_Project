import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';


// Paramétre du composant defibrilateurComponent

@Component({
  selector: 'app-defibrilateur',
  templateUrl: './defibrilateur.component.html',
  styleUrls: ['./defibrilateur.component.css']
})


export class DefibrilateurComponent implements OnInit {


  // Variable Image 

  public logo_lifeaz = "assets/LIFEAZ.png"
  public logo_menu = "assets/icon_menu.png"
  public logo_check = "assets/icon_check.png"
  public logo_danger = "assets/icon_danger.png"
  public logo_inter = "assets/icon_inter.png"
  public logo_spark = "assets/icon_spark.png"
  public logo_loc = "assets/icon_loc.png"
  public logo_line2 = "assets/Line 2.png"

  // Variable Texte 
  

  public Title : string;
 defibrilator : any;
 serial:any;
 locatioName: any;
 locationAddr:any;
 state:any;
 electrodesExpiry:any;
 



  
constructor(public http: HttpClient) {
 this.Title = "MES DEFIBRILATEURS";

 

  }

  ngOnInit():void{
    this.http.get<any>('http://localhost:5500/defibrilator')
     .subscribe(response => {
      console.log(response[0]);
      this.defibrilator = response[0];
    
      console.log(response[1]);
      



    
     });
  }
}




 
 
  
    


































/*export class DefibrilateurComponent implements OnInit {


  // Image 
  public logo_lifeaz = "assets/LIFEAZ.png"
  public logo_menu = "assets/icon_menu.png"
  public logo_check = "assets/icon_check.png"
  public logo_danger = "assets/icon_danger.png"
  public logo_inter = "assets/icon_inter.png"
  public logo_spark = "assets/icon_spark.png"
  public logo_loc = "assets/icon_loc.png"
  public logo_line2 = "assets/Line 2.png"

  // initialiser nos valeurs à apparaitre sur le html 
  ngOnInit():void{

  }

  //Texte 

  public Title : string;
  public Menu : string;
   defibrilatorApiUrl = '';
  
   defibrilatorData = {
   
    Serial: '',
    locationName: '',
    locationAddr: '',
    state: '',
   electrodesExpiry: ''
   
  };



  //variable de notre base de données LifeAz 
/*
  constructor(public http: HttpClient) {

    this.Title = "Mes défibrilateurs";
    this.Menu = "MENU";


    this.defibrilatorApiUrl = 'http://localhost:5500/defibrilator';


this.readAPI(this.defibrilatorApiUrl) .subscribe((data) => { console.log(data);
  this.defibrilatorData. Serial = data['serial'];
  this.defibrilatorData.locationName = data['locationName'];
  this.defibrilatorData. locationAddr= data['locationAddr'];
  this.defibrilatorData. state= data['state'];
  this.defibrilatorData. electrodesExpiry= data['electrodesExpiry'];*/