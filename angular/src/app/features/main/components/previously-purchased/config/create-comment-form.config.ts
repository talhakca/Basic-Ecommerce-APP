import { Validators } from "@angular/forms";
import { CrudFormConfig, CrudViewFormItemType, FormLayout } from "src/app/features/rappider/components/lib/utils";

export const CREATE_COMMENT_CONFIG: CrudFormConfig = {
  formLayout: FormLayout.Vertical,
  items: [
    {
      title: 'Message',
      type: CrudViewFormItemType.TextArea, // 
      fieldName: 'message',
      validators: [
        {
          type: Validators.required,
          errorKey: 'required',
          errorMessage: 'This field is required'
        }
      ],
    },
  ],
  submitButton: {
    visible: false
  }
}