import { SerwisService } from './serwis.service';
import { Component, Input } from '@angular/core';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular2';
  constructor(private ngxXmlToJsonService: NgxXmlToJsonService, private ser : SerwisService, private httpClient:HttpClient, private router: Router){
    this.imgPath = ser.imgPath;
    this.dozwolone = ser.dozwoloneZnaki;

    this.biblio = ser.bibliotekaActive;

    const options = {
      textKey: 'text',
      attrKey: 'attr',
      cdataKey: 'cdata',
    };

		this.httpClient.get("./assets/czasopisma.xml", {responseType: 'text'})
		.subscribe({
      next:(data) => {
      const jsonObj = this.ngxXmlToJsonService.xmlToJson(data, options);
      this.data = jsonObj;
      this.images = jsonObj.czasopisma.zmienne;
		},
    error:(error) =>{
			console.log("Error", error);
		}});
  }

  date_now = Date.now();
  zarobki = null;
  images : any = {};
  dozwolone : Array<String> = [];
  imgPath : string = "";
  imgName : string = "";
  biblio : boolean = false;
  data : any;

  getImage(src:any){
    let temp = this.imgPath+this.images[src].src.text
    return temp;
  }

  ngOnInit() {
    setInterval(() => {
      this.date_now = Date.now();
    }, 1000);
  }

  check(e : KeyboardEvent){
    if(this.dozwolone.includes(e.key)){
      if(e.key == "." && (<HTMLInputElement>e.target).value.includes(".")){
        return false;
      }
      return true;
    }
    return false;
  }

  openLib(na : any){
    this.imgName = na.toString();
    this.biblio = true;
  }
  isRootPath():Boolean
  {
    return this.router.url == "/";
  }
}
