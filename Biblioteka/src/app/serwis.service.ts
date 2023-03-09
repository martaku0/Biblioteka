import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SerwisService {

  bibliotekaActive = false;
  imgPath : string = "http://atarionline.pl/biblioteka/czasopisma/img/";
  dataImgPath : string = "http://atarionline.pl/biblioteka/czasopisma/";
  dozwoloneZnaki : Array<String> = ["0","1","2","3","4","5","6","7","8","9",'.',"Enter","Backspace"];

  constructor() { }
}
