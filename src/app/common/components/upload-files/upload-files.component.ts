import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {

  constructor() { 
    // const filereader = new FileReader();
    //   filereader.onload = () => {
    //     this.imagePreview = filereader.result;
    //   };
      //filereader.readAsDataURL(item);
      console.log(this.imagePreview);
  }
  files = [];
  @Input() singleFile:Boolean = false;
  @Output() filesUploaded = new EventEmitter<any>()
  ngOnInit(): void {
  }

  isMultipeFiles = false;
  imagePreview;
  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.filesUploaded.emit(this.files);
  }

  prepareFilesList(files: Array<any>) {
    if(this.singleFile){
      this.files = [];
        if(files.length == 1){
          this.isMultipeFiles = false;
          this.pushFiles(files);
        }
        else{
          this.isMultipeFiles = true;
        }
      }
  
      else{
         this.pushFiles(files);
      }
  }


  pushFiles(files){
    for (const item of files) {
    this.files.push(item);
    this.filesUploaded.emit(this.files);
    //console.log(this.files);
  }
}
     /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }


  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
