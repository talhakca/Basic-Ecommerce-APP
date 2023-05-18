import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderNoteListComponent } from './note-list.component';
import { RappiderNoteModule } from '../note/note.module';

@NgModule({
  declarations: [RappiderNoteListComponent],
  imports: [CommonModule, RappiderNoteModule],
  exports: [RappiderNoteListComponent],
})
export class RappiderNoteListModule {}
