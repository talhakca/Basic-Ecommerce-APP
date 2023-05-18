import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { ImageComponentConfig } from '../image/image-component-config.interface';

export interface ImageUploadComponentConfig {
  uploadedImage: ImageComponentConfig;
  uploadButtonVisibility?: boolean;
  isLoading?: boolean;
  uploadButton?: ButtonComponentConfig;
}
