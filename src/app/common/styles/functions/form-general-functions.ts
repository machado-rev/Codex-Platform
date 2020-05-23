import { Injectable } from "@angular/core";
declare var $:any;

@Injectable({
  providedIn: "root",
})

export class FormFunctions {
  openForm(){
    $('.forms-container').css("display","block");
  }

  closeForm(){
    $('.forms-container').css("display","none");
  }
}