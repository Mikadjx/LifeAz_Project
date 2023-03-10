import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { AnimateTimings } from '@angular/animations';


// Paramétre du composant defibrilateurComponent

@Component({
  selector: 'app-defibrilateur',
  templateUrl: './defibrilateur.component.html',
  styleUrls: ['./defibrilateur.component.css']
})


export class DefibrilateurComponent implements OnInit {



  // Déclaration de Variable Image

  public logo_lifeaz = "assets/LIFEAZ.png"
  public logo_menu = "assets/icon_menu.png"
  public logo_check = "assets/icon_check.png"
  public logo_danger = "assets/icon_danger.png"
  public logo_inter = "assets/icon_inter.png"
  public logo_spark = "assets/icon_spark.png"
  public logo_loc = "assets/icon_loc.png"
  public logo_line2 = "assets/Line 2.png"
  public Title : string;




  // Déclaration de Variable des informations BDD


//
public defibrilators : any;




constructor(public http: HttpClient) {
 this.Title = "MES DEFIBRILATEURS";




/*
  Appel D'api permettant de dynamiser notre html en indiquant le end-point de notre serveur NODE JS ( Api_creation)
  Test effectué avec console log afin de voir si la requête est ok  */

  }

  ngOnInit():void{
  this.http.get<any>(`http://localhost:3000/defibrilator/`) .subscribe(response => {
      this.defibrilators = response;
        console.log(this.defibrilators);

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
