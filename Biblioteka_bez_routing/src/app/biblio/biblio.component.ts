import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent {
  @Input() name? : string;
  @Input() data? : any;

  lata : any;
  year : string = "";
  imgPath : string = "";
  dane : any;
  date_now = Date.now();
  biblio = true;
  isLoad = false;

  constructor(){
    this.imgPath = "http://atarionline.pl/biblioteka/czasopisma/";    
  }

  ngOnInit(){ 
    setInterval(() => {
      this.date_now = Date.now();
    }, 1000);

    this.dane = Object.values(this.data.czasopisma[this.name!])
    this.dane.splice(0, 1);
    this.lata = this.data.czasopisma.lata
  }

  loadData(y : string){
    this.year = y;
    this.isLoad = true;
  }
}
