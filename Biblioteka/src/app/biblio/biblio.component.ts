import { Component, Input } from '@angular/core';
import { SerwisService } from '../serwis.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent {
  @Input() name? : string;
  @Input() data? : any;

  lata : any;
  isDaneOfMagazine : boolean = false;
  year : string = "";
  imgPath : string = "";
  dane : any;
  loaded = false;
  date_now = Date.now();
  biblio = true;

  constructor(ser : SerwisService, private httpClient:HttpClient, private ngxXmlToJsonService: NgxXmlToJsonService,private router: Router, private activeRoute: ActivatedRoute){
    this.imgPath = ser.dataImgPath;
    ser.bibliotekaActive = this.biblio;
    this.loaded = false;
    this.isDaneOfMagazine = false;

    const options = {
      textKey: 'text',
      attrKey: 'attr',
      cdataKey: 'cdata',
    };

    this.httpClient.get("./../assets/czasopisma.xml", {responseType: 'text'})
		.subscribe({
      next:(data) => {
        const jsonObj = this.ngxXmlToJsonService.xmlToJson(data, options);
        this.data = jsonObj;
        this.name = this.activeRoute.snapshot.paramMap.get("name")!;
        this.lata = this.data.czasopisma.lata
  
        if(this.data.czasopisma[this.name]){
          if(this.activeRoute.snapshot.paramMap.get("year")){
            this.year=this.activeRoute.snapshot.paramMap.get("year")!;  
            if(!(this.data.czasopisma.lata[this.name].text).split(",").includes(this.year) && this.year != "wszystkie"){
              this.router.navigate(['/']);
            }
            else{
              this.loaded = true;
              this.isDaneOfMagazine = true;
              this.loadData(this.year);
              this.dane = Object.values(this.data.czasopisma[this.name])
              this.dane.splice(0, 1);
            }
          }
          else{
            this.loaded = true;
            this.dane = Object.values(this.data.czasopisma[this.name])
            this.dane.splice(0, 1);
          }
        }
        else{
  
          this.router.navigate(['/']);
        }
		},
    error:(error) =>{
			console.log("Error", error);
		}});

  }

  ngOnInit(){ 
    setInterval(() => {
      this.date_now = Date.now();
    }, 1000);
  }

  loadData(y : string){
    this.isDaneOfMagazine = true;
    this.year = y;
  }
}
