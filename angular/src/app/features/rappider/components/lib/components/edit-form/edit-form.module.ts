import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RappiderModalModule } from '../modal/modal.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { RappiderEditFormComponent } from './edit-form.component';
import { RappiderBreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { RappiderListGridDataInputModule } from '../list-grid-data-input/list-grid-data-input.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderEditFormConfigInputModule } from '../edit-form-config-input/edit-form-config-input.module';
import { RappiderJsonArrayModule } from '../json-array/json-array.module';
import { RappiderListModule } from '../list/list.module';
import { RappiderDimensionSelectModule } from '../dimension-select/dimension-select.module';
import { RappiderListGridConfigInputModule } from '../list-grid-config-input/list-grid-config-input.module';
import { RappiderTimePickerModule } from '../time-picker/time-picker.module';
import { RappiderColorPickerModule } from '../color-picker/color-picker.module';
import { RappiderTextareaModule } from '../textarea/textarea.module';
import { RappiderRichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';
import { RappiderHtmlEditorModule } from '../html-editor/html-editor.module';
import { RappiderNumberInputModule } from '../number-input/number-input.module';
import { RappiderDatePickerModule } from '../date-picker/date-picker.module';
import { RappiderDatetimePickerModule } from '../datetime-picker/datetime-picker.module';
import { RappiderRadioModule } from '../radio/radio.module';
import { RappiderCheckboxModule } from '../checkbox/checkbox.module';
import { RappiderSelectModule } from '../select/select.module';
import { RappiderTagInputModule } from '../tag-input/tag-input.module';
import { RappiderRateModule } from '../rate/rate.module';
import { RappiderSliderModule } from '../slider/slider.module';
import { RappiderRowFormModule } from '../row-form/row-form.module';
import { RappiderStringArrayModule } from '../string-array/string-array.module';
import { RappiderIconPickerModule } from '../icon-picker/icon-picker.module';
import { RappiderInputValidatorInfoModule } from '../input-validator-info/input-validator-info.module';
import { RappiderInputErrorModule } from '../input-error/input-error.module';
import { RappiderInputLabelModule } from '../input-label/input-label.module';
import { RappiderRadioGroupModule } from '../radio-group/radio-group.module';
import { RappiderCodeEditorModule } from '../code-editor/code-editor.module';
import { RappiderInputTemplateModule } from '../input-template/input-template.module';
import { RappiderSwitchModule } from '../switch/switch.module';
import { RappiderSpinModule } from '../spin/spin.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderRowSelectModule } from '../row-select/row-select.module';
import { RappiderInlineRowFormModule } from '../inline-row-form/inline-row-form.module';
import { RappiderIconPickerTwoModule } from '../icon-picker-two/icon-picker-two.module';
import { RappiderBorderSettingsModule } from '../border-settings/border-settings.module';
import { RappiderShadowSettingsModule } from '../shadow-settings/shadow-settings.module';
import { RappiderSpacingModule } from '../spacing/spacing.module';
import { RappiderGridBuilderModule } from '../grid-builder/grid-builder.module';
import { RappiderMonacoEditorModule } from '../monaco-editor/monaco-editor.module';
import { RappiderPhoneNumberInputModule } from '../phone-number-input/phone-number-input.module';
import { FormBuilderInputComponent } from './components/form-builder-input/form-builder-input.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { RappiderAlertModule } from '../alert/alert.module';
import { RappiderCheckboxListModule } from '../checkbox-list/checkbox-list.module';
import { RappiderAssetPickerModule } from '../asset-picker/asset-picker.module';
import { CardSelectorModule } from '../card-selector/card-selector.module';
import { RappiderTreeSelectModule } from '../tree-select/tree-select.module';

const monacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {
    console.log((<any>window).monaco);
  },
};

@NgModule({
  declarations: [
    RappiderEditFormComponent,
    FormBuilderComponent,
    FormBuilderInputComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    RappiderModalModule,
    NzToolTipModule,
    NzDropDownModule,
    NzIconModule,
    RappiderBreadcrumbModule,
    RappiderListGridDataInputModule,
    RappiderTextboxModule,
    RappiderEditFormConfigInputModule,
    RappiderJsonArrayModule,
    RappiderListModule,
    RappiderDimensionSelectModule,
    RappiderListGridConfigInputModule,
    RappiderTimePickerModule,
    RappiderColorPickerModule,
    RappiderTextareaModule,
    RappiderRichTextEditorModule,
    RappiderCodeEditorModule,
    RappiderHtmlEditorModule,
    RappiderNumberInputModule,
    RappiderDatePickerModule,
    RappiderDatetimePickerModule,
    RappiderRadioModule,
    RappiderCheckboxModule,
    RappiderSelectModule,
    RappiderTagInputModule,
    RappiderRateModule,
    RappiderSliderModule,
    RappiderRowFormModule,
    RappiderStringArrayModule,
    RappiderIconPickerModule,
    RappiderInputValidatorInfoModule,
    RappiderInputErrorModule,
    RappiderInputLabelModule,
    RappiderRadioGroupModule,
    RappiderRadioGroupModule,
    RappiderInputTemplateModule,
    RappiderSwitchModule,
    RappiderSpinModule,
    RappiderButtonModule,
    RappiderIconModule,
    RappiderRowSelectModule,
    RappiderInlineRowFormModule,
    RappiderIconPickerTwoModule,
    RappiderBorderSettingsModule,
    RappiderShadowSettingsModule,
    RappiderSpacingModule,
    RappiderGridBuilderModule,
    RappiderMonacoEditorModule.forRoot(monacoEditorConfig),
    RappiderPhoneNumberInputModule,
    DragDropModule,
    NzTabsModule,
    RappiderAlertModule,
    RappiderCheckboxListModule,
    RappiderAssetPickerModule,
    CardSelectorModule,
    RappiderTreeSelectModule,
  ],
  exports: [RappiderEditFormComponent],
})
export class RappiderEditFormModule {}
