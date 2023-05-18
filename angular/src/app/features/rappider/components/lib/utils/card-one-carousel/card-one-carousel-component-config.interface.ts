import { ButtonComponentConfig } from '../button';
import { CardOneComponentConfig } from '../card-one/card-one-component-config.interface';
import { HeadingComponentConfig } from '../heading';

export interface CardOneCarouselComponentConfig {
  data?: any;
  listData?: CardOneComponentConfig[];
  listHeading?: HeadingComponentConfig;
  headerButton?: ButtonComponentConfig;
  nextButton?: ButtonComponentConfig;
  backButton?: ButtonComponentConfig;
  slidesPerView?: number;
}
