import { AvatarComponentConfig } from '../avatar';
import { HeadingComponentConfig } from '../heading';

export interface TestimonialComponentConfig {
  title?: HeadingComponentConfig;
  subtitle?: HeadingComponentConfig;
  avatar?: AvatarComponentConfig;
  content?: string;
}
