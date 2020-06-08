import { Directive , HostListener, HostBinding, Output, EventEmitter, Input} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @Output() fileDropped =  new EventEmitter<any>();

  @HostBinding('class.fileover') fileOver:Boolean;

  @HostListener('dragover',['$event']) onDragOver(evt){
   //console.log(evt);
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave',['$event']) onDragLeave(evt){
    //console.log(evt);
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop',['$event']) ondrop(evt){
    //console.log(evt);
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    //console.log(files);
      if(files.length){
        this.fileDropped.emit(files);
      }

      
    
  }

  constructor() { }

}
