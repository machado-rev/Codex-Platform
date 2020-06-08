import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFilesComponent } from './upload-files.component';
import { DndDirective } from './dnd.directive';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';

@NgModule({
  declarations: [UploadFilesComponent,DndDirective],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  exports:[UploadFilesComponent]
})

export class UploadFilesModule { }
