import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { ImageComponentConfig } from '../../utils/image';

@Component({
  selector: 'rappider-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class RappiderImageUploadComponent {
  @Input() uploadedImage: ImageComponentConfig;
  @Input() uploadButtonVisibility: boolean;
  @Input() isLoading: boolean;
  @Input() uploadButton: ButtonComponentConfig;

  @Output() fileSelect = new EventEmitter<File>();

  onFileSelect(files: File[]) {
    this.fileSelect.emit(files[0]);
  }
}
