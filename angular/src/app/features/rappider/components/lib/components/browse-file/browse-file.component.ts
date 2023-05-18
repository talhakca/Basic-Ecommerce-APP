import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Input,
} from '@angular/core';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-browse-file',
  templateUrl: './browse-file.component.html',
  styleUrls: ['./browse-file.component.scss'],
})
export class RappiderBrowseFileComponent implements OnInit {
  @Input() text: TextComponentConfig;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() fileUpload: EventEmitter<any> = new EventEmitter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() uploadError: EventEmitter<any> = new EventEmitter();

  // #region Error Message Constants
  private uploadErrorMessage =
    'There was an error while uploading a media file.';
  // #endregion

  constructor(
    private elementRef: ElementRef
  ) // eslint-disable-next-line no-empty-function
  {}

  ngOnInit() {
    if (window['File'] && window['FileList'] && window['FileReader']) {
      this.setEvents();
    }
  }

  setEvents() {
    const fileSelectElement =
      this.elementRef.nativeElement.querySelector('#file-select');
    fileSelectElement.addEventListener('change', this.fileDrop.bind(this));
  }

  fileDrop(e) {
    e.preventDefault();
    const files = e.target.files || e.dataTransfer.files;
    // process all file objects
    for (let i = 0; i < files.length; i++) {
      this.parseFile(files[i]);
    }
  }

  parseFile(file: File) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const uploadMediaFile: any = {
      file: file,
    };
    const reader = new FileReader();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reader.onload = (e: any) => {
      if (e && e.target && e.target.result) {
        /* add base64 variable (base64 format) for file ( only for image for now ) preview */
        const base64Allowed = file.type.indexOf('image') === 0;
        if (base64Allowed) {
          uploadMediaFile.base64 = e.target.result;
        }
        /* emit the file list */
        this.fileUpload.emit(uploadMediaFile);
      } else {
        this.uploadError.emit(this.uploadErrorMessage);
      }
    };
    reader.readAsDataURL(file);
  }

  onFileSelectOpen() {
    const fileSelectElement =
      this.elementRef.nativeElement.querySelector('#file-select');
    fileSelectElement.click();
  }
}
