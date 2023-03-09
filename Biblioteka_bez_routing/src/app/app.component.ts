import { Component, Input } from '@angular/core';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular2';
  constructor(private ngxXmlToJsonService: NgxXmlToJsonService){
    this.imgPath = "http://atarionline.pl/biblioteka/czasopisma/img/";
    this.dozwolone = ["0","1","2","3","4","5","6","7","8","9",'.',"Enter","Backspace"];

    const options = {
      textKey: 'text',
      attrKey: 'attr',
      cdataKey: 'cdata',
    };
  
    fetch("./assets/czasopisma.xml")
    .then(response => response.text())
    .then(data => {
      const jsonObj = this.ngxXmlToJsonService.xmlToJson(data, options);
      this.data1 = jsonObj;
      this.images = jsonObj.czasopisma.zmienne;
    })
    .catch(console.error);
  }

  date_now = Date.now();
  zarobki = null;
  images : any = {};
  dozwolone : Array<String> = [];
  imgPath : string = "";
  imgName : string = "";
  biblio : boolean = false;
  data1 : any;

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
}
