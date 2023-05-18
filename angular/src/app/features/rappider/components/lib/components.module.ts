/* angular libs */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatDateModule } from './utils/common-utils/pipes/format-date-pipe/format-date.module';

/* rappider modules */
import { RappiderAccordionModule } from './components/accordion/accordion.module';
import { RappiderAddressCardModule } from './components/address-card/address-card.module';
import { RappiderAlertModule } from './components/alert/alert.module';
import { RappiderAvatarModule } from './components/avatar/avatar.module';
import { RappiderAvatarListModule } from './components/avatar-list/avatar-list.module';
import { RappiderAvatarListWithTagModule } from './components/avatar-list-with-tag/avatar-list-with-tag.module';
import { RappiderBadgeModule } from './components/badge/badge.module';
import { RappiderBannerSplitModule } from './components/banner-split/banner-split.module';
import { RappiderBlockquoteModule } from './components/blockquote/blockquote.module';
import { RappiderBreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { RappiderBrowseFileModule } from './components/browse-file/browse-file.module';
import { RappiderButtonModule } from './components/button/button.module';
import { RappiderButtonGroupModule } from './components/button-group/button-group.module';
import { RappiderCallToActionModule } from './components/call-to-action/call-to-action.module';
import { RappiderCardModule } from './components/card/card.module';
import { RappiderCardEightModule } from './components/card-eight/card-eight.module';
import { RappiderCardElevenModule } from './components/card-eleven/card-eleven.module';
import { RappiderCardFiveModule } from './components/card-five/card-five.module';
import { RappiderCardFourModule } from './components/card-four/card-four.module';
import { RappiderCardListModule } from './components/card-list/card-list.module';
import { RappiderCardNineModule } from './components/card-nine/card-nine.module';
import { RappiderCardSevenModule } from './components/card-seven/card-seven.module';
import { RappiderCardSixModule } from './components/card-six/card-six.module';
import { RappiderCardTenModule } from './components/card-ten/card-ten.module';
import { RappiderCardThreeModule } from './components/card-three/card-three.module';
import { RappiderCardTwelveModule } from './components/card-twelve/card-twelve.module';
import { RappiderCardTwoModule } from './components/card-two/card-two.module';
import { RappiderCartItemModule } from './components/cart-item/cart-item.module';
import { RappiderCheckboxModule } from './components/checkbox/checkbox.module';
import { RappiderCheckboxListModule } from './components/checkbox-list/checkbox-list.module';
import { RappiderColorPickerModule } from './components/color-picker/color-picker.module';
import { RappiderCommentModule } from './components/comment/comment.module';
import { RappiderCompareTableModule } from './components/compare-table/compare-table.module';
import { RappiderCountdownModule } from './components/countdown/countdown.module';
import { RappiderDatePickerModule } from './components/date-picker/date-picker.module';
import { RappiderDatetimePickerModule } from './components/datetime-picker/datetime-picker.module';
import { RappiderDimensionSelectModule } from './components/dimension-select/dimension-select.module';
import { RappiderDividerModule } from './components/divider/divider.module';
import { RappiderDropdownMenuModule } from './components/dropdown-menu/dropdown-menu.module';
import { RappiderEventListModule } from './components/event-list/event-list.module';
import { RappiderFeedbackModule } from './components/feedback/feedback.module';
import { RappiderGalleryGridModule } from './components/gallery-grid/gallery-grid.module';
import { RappiderGenericListModule } from './components/generic-list/generic-list.module';
import { RappiderGridContainerModule } from './components/grid-container/grid-container.module';
import { RappiderHeadingModule } from './components/heading/heading.module';
import { RappiderHeroModule } from './components/hero/hero.module';
import { RappiderHtmlEditorModule } from './components/html-editor/html-editor.module';
import { RappiderHtmlViewerModule } from './components/html-viewer/html-viewer.module';
import { RappiderIconModule } from './components/icon/icon.module';
import { RappiderIconBlockModule } from './components/icon-block/icon-block.module';
import { RappiderIconPickerModule } from './components/icon-picker/icon-picker.module';
import { RappiderImageModule } from './components/image/image.module';
import { RappiderInputErrorModule } from './components/input-error/input-error.module';
import { RappiderInputGroupModule } from './components/input-group/input-group.module';
import { RappiderInputLabelModule } from './components/input-label/input-label.module';
import { RappiderInputValidatorInfoModule } from './components/input-validator-info/input-validator-info.module';
import { RappiderLabelModule } from './components/label/label.module';
import { RappiderListModule } from './components/list/list.module';
import { RappiderListFourModule } from './components/list-four/list-four.module';
import { RappiderListTwoModule } from './components/list-two/list-two.module';
import { RappiderMenuModule } from './components/menu/menu.module';
import { RappiderMessageOneModule } from './components/message-one/message-one.module';
import { RappiderModalModule } from './components/modal/modal.module';
import { RappiderNavigationBarModule } from './components/navigation-bar/navigation-bar.module';
import { RappiderNewsBlockModule } from './components/news-block/news-block.module';
import { RappiderNumberInputModule } from './components/number-input/number-input.module';
import { RappiderPaginationModule } from './components/pagination/pagination.module';
import { RappiderPanelModule } from './components/panel/panel.module';
import { RappiderParagraphModule } from './components/paragraph/paragraph.module';
import { RappiderPaymentSummaryModule } from './components/payment-summary/payment-summary.module';
import { RappiderPricingPlanModule } from './components/pricing-plan/pricing-plan.module';
import { RappiderProductModule } from './components/product/product.module';
import { RappiderProductPreviewCardModule } from './components/product-preview-card/product-preview-card.module';
import { RappiderProductRecommendationsModule } from './components/product-recommendations/product-recommendations.module';
import { RappiderProgressModule } from './components/progress/progress.module';
import { RappiderProgressOneModule } from './components/progress-one/progress-one.module';
import { RappiderPromoModule } from './components/promo/promo.module';
import { RappiderRadioModule } from './components/radio/radio.module';
import { RappiderRadioGroupModule } from './components/radio-group/radio-group.module';
import { RappiderRateModule } from './components/rate/rate.module';
import { RappiderRateDisplayModule } from './components/rate-display/rate-display.module';
import { RappiderReviewResultsModule } from './components/review-results/review-results.module';
import { RappiderRichTextEditorModule } from './components/rich-text-editor/rich-text-editor.module';
import { RappiderSelectModule } from './components/select/select.module';
import { RappiderSliderModule } from './components/slider/slider.module';
import { RappiderStatisticModule } from './components/statistic/statistic.module';
import { RappiderSubscribeSourceModule } from './components/subscribe-source/subscribe-source.module';
import { RappiderSwitchModule } from './components/switch/switch.module';
import { RappiderTabModule } from './components/tab/tab.module';
import { RappiderTabsetModule } from './components/tabset/tabset.module';
import { RappiderTagModule } from './components/tag/tag.module';
import { RappiderTagInputModule } from './components/tag-input/tag-input.module';
import { RappiderTeamBlockModule } from './components/team-block/team-block.module';
import { RappiderTestimonialModule } from './components/testimonial/testimonial.module';
import { RappiderTextModule } from './components/text/text.module';
import { RappiderTextareaModule } from './components/textarea/textarea.module';
import { RappiderTextboxModule } from './components/textbox/textbox.module';
import { RappiderTimePickerModule } from './components/time-picker/time-picker.module';
import { RappiderTimelineModule } from './components/timeline/timeline.module';
import { RappiderTimelineCardModule } from './components/timeline-card/timeline-card.module';
import { RappiderTitleModule } from './components/title/title.module';
import { RappiderTitleBarModule } from './components/title-bar/title-bar.module';
import { RappiderTitleImageModule } from './components/title-image/title-image.module';
import { RappiderUploadFileModule } from './components/upload-file/upload-file.module';
import { RappiderUserBlockModule } from './components/user-block/user-block.module';
import { RappiderIconAndMenuListModule } from './components/icon-and-menu-list/icon-and-menu-list.module';
import { RappiderChatOneModule } from './components/chat-one/chat-one.module';
import { RappiderWeatherConditionModule } from './components/weather-condition/weather-condition.module';
import { RappiderProductCardModule } from './components/product-card/product-card.module';
import { RappiderPaymentDetailsModule } from './components/payment-details/payment-details.module';
import { RappiderJsonArrayModule } from './components/json-array/json-array.module';
import { RappiderListGridModule } from './components/list-grid/list-grid.module';
import { RappiderRowFormModule } from './components/row-form/row-form.module';
import { RappiderStringArrayModule } from './components/string-array/string-array.module';
import { RappiderListGridDataInputModule } from './components/list-grid-data-input/list-grid-data-input.module';
import { RappiderTreeGridModule } from './components/tree-grid/tree-grid.module';
import { RappiderListGridConfigInputModule } from './components/list-grid-config-input/list-grid-config-input.module';
import { RappiderEditFormConfigInputModule } from './components/edit-form-config-input/edit-form-config-input.module';
import { RappiderEditFormModule } from './components/edit-form/edit-form.module';
import { RappiderCardThirteenModule } from './components/card-thirteen/card-thirteen.module';
import { RappiderImageLabelModule } from './components/image-label/image-label.module';
import { RappiderDetailTableModule } from './components/detail-table/detail-table.module';
import { RappiderLinkListModule } from './components/link-list/link-list.module';
import { RappiderProductFeatureCardModule } from './components/product-feature-card/product-feature-card.module';
import { RappiderLinkFooterModule } from './components/link-footer/link-footer.module';
import { RappiderIconTextModule } from './components/icon-text/icon-text.module';
import { RappiderBannerModule } from './components/banner/banner.module';
import { RappiderShoppingCartModule } from './components/shopping-cart/shopping-cart.module';
import { RappiderFormCardModule } from './components/form-card/form-card.module';
import { RappiderCrudDetailModule } from './components/crud-detail/crud-detail.module';
import { RappiderDeliveredProductDetailModule } from './components/delivered-product-detail/delivered-product-detail.module';
import { RappiderCalendarModule } from './components/calendar/calendar.module';
import { RappiderCartPreviewModule } from './components/cart-preview/cart-preview.module';
import { RappiderImageGalleryModule } from './components/image-gallery/image-gallery.module';
import { RappiderTitleToolbarModule } from './components/title-toolbar/title-toolbar.module';
import { RappiderToolbarModule } from './components/toolbar/toolbar.module';
import { RappiderProductOneModule } from './components/product-one/product-one.module';
import { RappiderProductOneListModule } from './components/product-one-list/product-one-list.module';
import { RappiderImageTimerModule } from './components/image-timer/image-timer.module';
import { RappiderProfileCardModule } from './components/profile-card/profile-card.module';
import { RappiderCarouselModule } from './components/carousel/carousel.module';
import { RappiderCategoryListModule } from './components/category-list/category-list.module';
import { RappiderLottiePlayerModule } from './components/lottie-player/lottie-player.module';
import { RappiderAddressFormModule } from './components/address-form/address-form.module';
import { RappiderCreditCardFormModule } from './components/credit-card-form/credit-card-form.module';
import { RappiderCardOneModule } from './components/card-one/card-one.module';
import { RappiderCardOneCarouselModule } from './components/card-one-carousel/card-one-carousel.module';
import { RappiderLoginFormModule } from './components/login-form/login-form.module';
import { RappiderCardCcsModule } from './components/card-ccs/card-ccs.module';
import { RappiderSpinModule } from './components/spin/spin.module';
import { RappiderCodemirrorInputFormModule } from './components/codemirror-input-form/codemirror-input-form.module';
import { RappiderPageWrapperModule } from './components/page-wrapper/page-wrapper.module';
import { RappiderCardOneListModule } from './components/card-one-list/card-one-list.module';
import { RappiderNoteModule } from './components/note/note.module';
import { RappiderKeyValueDisplayModule } from './components/key-value-display/key-value-display.module';
import { RappiderNoteListModule } from './components/note-list/note-list.module';
import { RappiderMediaPlayerModule } from './components/media-player/media-player.module';
import { RappiderCodeEditorModule } from './components/code-editor/code-editor.module';
import { RappiderPdfViewerModule } from './components/pdf-viewer/pdf-viewer.module';
import { RappiderCardFourteenModule } from './components/card-fourteen/card-fourteen.module';
import { RappiderInputTemplateModule } from './components/input-template/input-template.module';
import { RappiderTagListModule } from './components/tag-list/tag-list.module';
import { RappiderHeroListModule } from './components/hero-list/hero-list.module';
import { RappiderAutoCompleteModule } from './components/auto-complete/auto-complete.module';
import { RappiderTestimonialListModule } from './components/testimonial-list/testimonial-list.module';
import { RappiderSearchModule } from './components/search/search.module';
import { RappiderAssetPickerModule } from './components/asset-picker/asset-picker.module';
import { RappiderTimeNoticeCardModule } from './components/time-notice-card/time-notice-card.module';
import { RappiderButtonListModule } from './components/button-list/button-list.module';
import { RappiderAlternativeCarouselModule } from './components/alternative-carousel/alternative-carousel.module';
import { RappiderDrawerModule } from './components/drawer/drawer.module';
import { RappiderRowSelectModule } from './components/row-select/row-select.module';
import { RappiderAlertListModule } from './components/alert-list/alert-list.module';
import { RappiderUnorderedListOneModule } from './components/unordered-list-one/unordered-list-one.module';
import { RappiderUnorderedListOneArrayModule } from './components/unordered-list-one-array/unordered-list-one-array.module';
import { RappiderImageUploadModule } from './components/image-upload/image-upload.module';
import { RappiderMenuTwoModule } from './components/menu-two/menu-two.module';
import { RappiderProfileCardTwoModule } from './components/profile-card-two/profile-card-two.module';
import { RappiderLoadingNotificationModule } from './components/loading-notification/loading-notification.module';
import { RappiderStripeModule } from './components/stripe/stripe.module';
import { RappiderInlineRowFormModule } from './components/inline-row-form/inline-row-form.module';
import { RappiderMaterialSidenavModule } from './components/material-sidenav/material-sidenav.module';
import { RappiderIconPickerTwoModule } from './components/icon-picker-two/icon-picker-two.module';
import { RappiderShadowSettingsModule } from './components/shadow-settings/shadow-settings.module';
import { RappiderSpacingModule } from './components/spacing/spacing.module';
import { RappiderBorderSettingsModule } from './components/border-settings/border-settings.module';
import { RappiderDataBinderModule } from './components/data-binder/data-binder.module';
import { RappiderPhoneNumberInputModule } from './components/phone-number-input/phone-number-input.module';
import { RappiderFontPickerModule } from './components/font-picker/font-picker.module';
import { RappiderFontCardModule } from './components/font-card/font-card-module';
import { RappiderCardsModule } from './components/cards/cards.module';
import { RappiderAssetBrowserModule } from './components/asset-browser/asset-browser.module';
import { CardSelectorModule } from './components/card-selector/card-selector.module';
import { RappiderTreeSelectModule } from './components/tree-select/tree-select.module';

/* TODO: Bu modulu yaratmisiz ama boyle bir modulu import etmemeliyiz bir yere.
 * Her componentin kendi modulu var ve gerektiginde o import edilmeli
 * Bu modul ile ne yapacagimiza karar verelim
 */
@NgModule({
  imports: [
    CommonModule,
    /* utils */
    FormatDateModule,
    /* rappider modules */
    RappiderIconAndMenuListModule,
    RappiderAccordionModule,
    RappiderAddressCardModule,
    RappiderAlertModule,
    RappiderAvatarModule,
    RappiderAvatarListModule,
    RappiderAvatarListWithTagModule,
    RappiderBadgeModule,
    RappiderBannerSplitModule,
    RappiderBlockquoteModule,
    RappiderBreadcrumbModule,
    RappiderBrowseFileModule,
    RappiderButtonModule,
    RappiderButtonGroupModule,
    RappiderCalendarModule,
    RappiderCallToActionModule,
    RappiderCardModule,
    RappiderCardEightModule,
    RappiderCardElevenModule,
    RappiderCardFiveModule,
    RappiderCardFourModule,
    RappiderCardListModule,
    RappiderCardNineModule,
    RappiderCardSevenModule,
    RappiderCardSixModule,
    RappiderCardTenModule,
    RappiderCardThreeModule,
    RappiderCardTwelveModule,
    RappiderCardTwoModule,
    RappiderCarouselModule,
    RappiderCartItemModule,
    RappiderCheckboxModule,
    RappiderCheckboxListModule,
    RappiderColorPickerModule,
    RappiderCommentModule,
    RappiderCompareTableModule,
    RappiderCountdownModule,
    RappiderDatePickerModule,
    RappiderDatetimePickerModule,
    RappiderDimensionSelectModule,
    RappiderDividerModule,
    RappiderDropdownMenuModule,
    RappiderEventListModule,
    RappiderFeedbackModule,
    RappiderFormCardModule,
    RappiderFontCardModule,
    RappiderFontPickerModule,
    RappiderGalleryGridModule,
    RappiderGenericListModule,
    RappiderGridContainerModule,
    RappiderHeadingModule,
    RappiderHeroModule,
    RappiderHtmlEditorModule,
    RappiderHtmlViewerModule,
    RappiderIconModule,
    RappiderIconBlockModule,
    RappiderIconPickerModule,
    RappiderImageModule,
    RappiderImageTimerModule,
    RappiderInputErrorModule,
    RappiderInputGroupModule,
    RappiderInputLabelModule,
    RappiderInputValidatorInfoModule,
    RappiderLabelModule,
    RappiderListModule,
    RappiderListFourModule,
    RappiderListTwoModule,
    RappiderMenuModule,
    RappiderMessageOneModule,
    RappiderModalModule,
    RappiderNavigationBarModule,
    RappiderNewsBlockModule,
    RappiderNumberInputModule,
    RappiderPaginationModule,
    RappiderPanelModule,
    RappiderParagraphModule,
    RappiderPaymentSummaryModule,
    RappiderPricingPlanModule,
    RappiderProductModule,
    RappiderProductPreviewCardModule,
    RappiderProductRecommendationsModule,
    RappiderProgressModule,
    RappiderProgressOneModule,
    RappiderPromoModule,
    RappiderRadioModule,
    RappiderRadioGroupModule,
    RappiderRateModule,
    RappiderRateDisplayModule,
    RappiderReviewResultsModule,
    RappiderRichTextEditorModule,
    RappiderSelectModule,
    RappiderSliderModule,
    RappiderStatisticModule,
    RappiderSubscribeSourceModule,
    RappiderSwitchModule,
    RappiderTabModule,
    RappiderTabsetModule,
    RappiderTagModule,
    RappiderTagInputModule,
    RappiderTeamBlockModule,
    RappiderTestimonialModule,
    RappiderTextModule,
    RappiderTextareaModule,
    RappiderTextboxModule,
    RappiderTimePickerModule,
    RappiderTimelineModule,
    RappiderTimelineCardModule,
    RappiderTitleModule,
    RappiderTitleBarModule,
    RappiderTitleImageModule,
    RappiderUploadFileModule,
    RappiderUserBlockModule,
    RappiderChatOneModule,
    RappiderWeatherConditionModule,
    RappiderProductCardModule,
    RappiderPaymentDetailsModule,
    RappiderJsonArrayModule,
    RappiderListGridModule,
    RappiderRowFormModule,
    RappiderStringArrayModule,
    RappiderListGridDataInputModule,
    RappiderTreeGridModule,
    RappiderListGridConfigInputModule,
    RappiderEditFormConfigInputModule,
    RappiderEditFormModule,
    RappiderCardThirteenModule,
    RappiderImageLabelModule,
    RappiderDetailTableModule,
    RappiderImageLabelModule,
    RappiderLinkListModule,
    RappiderCardThirteenModule,
    RappiderProductFeatureCardModule,
    RappiderLinkFooterModule,
    RappiderIconTextModule,
    RappiderBannerModule,
    RappiderShoppingCartModule,
    RappiderCrudDetailModule,
    RappiderDeliveredProductDetailModule,
    RappiderCartPreviewModule,
    RappiderImageGalleryModule,
    RappiderTitleToolbarModule,
    RappiderToolbarModule,
    RappiderProductOneModule,
    RappiderProductOneListModule,
    RappiderProfileCardModule,
    RappiderCategoryListModule,
    RappiderLottiePlayerModule,
    RappiderAddressFormModule,
    RappiderCreditCardFormModule,
    RappiderCardOneModule,
    RappiderCardOneCarouselModule,
    RappiderLoginFormModule,
    RappiderCardCcsModule,
    RappiderSpinModule,
    RappiderCodemirrorInputFormModule,
    RappiderPageWrapperModule,
    RappiderCardOneListModule,
    RappiderNoteModule,
    RappiderKeyValueDisplayModule,
    RappiderNoteListModule,
    RappiderMediaPlayerModule,
    RappiderCodeEditorModule,
    RappiderPdfViewerModule,
    RappiderCardFourteenModule,
    RappiderInputTemplateModule,
    RappiderTagListModule,
    RappiderHeroListModule,
    RappiderAutoCompleteModule,
    RappiderTestimonialListModule,
    RappiderSearchModule,
    RappiderAssetPickerModule,
    RappiderTimeNoticeCardModule,
    RappiderButtonListModule,
    RappiderAlternativeCarouselModule,
    RappiderDrawerModule,
    RappiderRowSelectModule,
    RappiderAlertListModule,
    RappiderUnorderedListOneModule,
    RappiderUnorderedListOneArrayModule,
    RappiderImageUploadModule,
    RappiderMenuTwoModule,
    RappiderProfileCardTwoModule,
    RappiderLoadingNotificationModule,
    RappiderInlineRowFormModule,
    RappiderMaterialSidenavModule,
    RappiderStripeModule,
    RappiderIconPickerTwoModule,
    RappiderShadowSettingsModule,
    RappiderSpacingModule,
    RappiderBorderSettingsModule,
    RappiderDataBinderModule,
    RappiderPhoneNumberInputModule,
    RappiderCardsModule,
    RappiderAssetBrowserModule,
    CardSelectorModule,
    RappiderTreeSelectModule,
  ],
  providers: [],
  declarations: [],
  exports: [
    /* utils */
    FormatDateModule,
    /* rappider modules */
    RappiderIconAndMenuListModule,
    RappiderAccordionModule,
    RappiderAddressCardModule,
    RappiderAlertModule,
    RappiderAvatarModule,
    RappiderAvatarListModule,
    RappiderAvatarListWithTagModule,
    RappiderBadgeModule,
    RappiderBannerSplitModule,
    RappiderBlockquoteModule,
    RappiderBreadcrumbModule,
    RappiderBrowseFileModule,
    RappiderButtonModule,
    RappiderButtonGroupModule,
    RappiderCalendarModule,
    RappiderCallToActionModule,
    RappiderCardModule,
    RappiderCardEightModule,
    RappiderCardElevenModule,
    RappiderCardFiveModule,
    RappiderCardFourModule,
    RappiderCardListModule,
    RappiderCardNineModule,
    RappiderCardSevenModule,
    RappiderCardSixModule,
    RappiderCardTenModule,
    RappiderCardThreeModule,
    RappiderCardTwelveModule,
    RappiderCardTwoModule,
    RappiderCarouselModule,
    RappiderCartItemModule,
    RappiderCheckboxModule,
    RappiderCheckboxListModule,
    RappiderColorPickerModule,
    RappiderCommentModule,
    RappiderCompareTableModule,
    RappiderCountdownModule,
    RappiderDatePickerModule,
    RappiderDatetimePickerModule,
    RappiderDimensionSelectModule,
    RappiderDividerModule,
    RappiderDropdownMenuModule,
    RappiderEventListModule,
    RappiderFeedbackModule,
    RappiderFormCardModule,
    RappiderFontCardModule,
    RappiderGalleryGridModule,
    RappiderGenericListModule,
    RappiderGridContainerModule,
    RappiderHeadingModule,
    RappiderHeroModule,
    RappiderHtmlEditorModule,
    RappiderHtmlViewerModule,
    RappiderIconModule,
    RappiderIconBlockModule,
    RappiderIconPickerModule,
    RappiderImageModule,
    RappiderImageTimerModule,
    RappiderInputErrorModule,
    RappiderInputGroupModule,
    RappiderInputLabelModule,
    RappiderInputValidatorInfoModule,
    RappiderLabelModule,
    RappiderListModule,
    RappiderListFourModule,
    RappiderListTwoModule,
    RappiderMenuModule,
    RappiderMessageOneModule,
    RappiderModalModule,
    RappiderNavigationBarModule,
    RappiderNewsBlockModule,
    RappiderNumberInputModule,
    RappiderPaginationModule,
    RappiderPanelModule,
    RappiderParagraphModule,
    RappiderPaymentSummaryModule,
    RappiderPricingPlanModule,
    RappiderProductModule,
    RappiderProductPreviewCardModule,
    RappiderProductRecommendationsModule,
    RappiderProgressModule,
    RappiderProgressOneModule,
    RappiderPromoModule,
    RappiderRadioModule,
    RappiderRadioGroupModule,
    RappiderRateModule,
    RappiderRateDisplayModule,
    RappiderReviewResultsModule,
    RappiderRichTextEditorModule,
    RappiderSelectModule,
    RappiderSliderModule,
    RappiderStatisticModule,
    RappiderSubscribeSourceModule,
    RappiderSwitchModule,
    RappiderTabModule,
    RappiderTabsetModule,
    RappiderTagModule,
    RappiderTagInputModule,
    RappiderTeamBlockModule,
    RappiderTestimonialModule,
    RappiderTextModule,
    RappiderTextareaModule,
    RappiderTextboxModule,
    RappiderTimePickerModule,
    RappiderTimelineModule,
    RappiderTimelineCardModule,
    RappiderTitleModule,
    RappiderTitleBarModule,
    RappiderTitleImageModule,
    RappiderUploadFileModule,
    RappiderUserBlockModule,
    RappiderChatOneModule,
    RappiderWeatherConditionModule,
    RappiderProductCardModule,
    RappiderPaymentDetailsModule,
    RappiderJsonArrayModule,
    RappiderListGridModule,
    RappiderRowFormModule,
    RappiderStringArrayModule,
    RappiderListGridDataInputModule,
    RappiderTreeGridModule,
    RappiderListGridConfigInputModule,
    RappiderEditFormConfigInputModule,
    RappiderEditFormModule,
    RappiderLinkListModule,
    RappiderCardThirteenModule,
    RappiderImageLabelModule,
    RappiderProductFeatureCardModule,
    RappiderLinkFooterModule,
    RappiderIconTextModule,
    RappiderDetailTableModule,
    RappiderBannerModule,
    RappiderShoppingCartModule,
    RappiderCrudDetailModule,
    RappiderDeliveredProductDetailModule,
    RappiderCartPreviewModule,
    RappiderImageGalleryModule,
    RappiderTitleToolbarModule,
    RappiderToolbarModule,
    RappiderProductOneModule,
    RappiderProductOneListModule,
    RappiderProfileCardModule,
    RappiderCategoryListModule,
    RappiderLottiePlayerModule,
    RappiderAddressFormModule,
    RappiderCreditCardFormModule,
    RappiderCardOneModule,
    RappiderCardOneCarouselModule,
    RappiderLoginFormModule,
    RappiderCardCcsModule,
    RappiderSpinModule,
    RappiderCodemirrorInputFormModule,
    RappiderPageWrapperModule,
    RappiderCardOneListModule,
    RappiderNoteModule,
    RappiderKeyValueDisplayModule,
    RappiderNoteListModule,
    RappiderMediaPlayerModule,
    RappiderCodeEditorModule,
    RappiderPdfViewerModule,
    RappiderCardFourteenModule,
    RappiderInputTemplateModule,
    RappiderTagListModule,
    RappiderHeroListModule,
    RappiderAutoCompleteModule,
    RappiderTestimonialListModule,
    RappiderSearchModule,
    RappiderAssetPickerModule,
    RappiderTimeNoticeCardModule,
    RappiderButtonListModule,
    RappiderAlternativeCarouselModule,
    RappiderDrawerModule,
    RappiderRowSelectModule,
    RappiderAlertListModule,
    RappiderUnorderedListOneModule,
    RappiderUnorderedListOneArrayModule,
    RappiderImageUploadModule,
    RappiderMenuTwoModule,
    RappiderProfileCardTwoModule,
    RappiderLoadingNotificationModule,
    RappiderInlineRowFormModule,
    RappiderMaterialSidenavModule,
    RappiderStripeModule,
    RappiderIconPickerTwoModule,
    RappiderShadowSettingsModule,
    RappiderSpacingModule,
    RappiderBorderSettingsModule,
    RappiderDataBinderModule,
    RappiderPhoneNumberInputModule,
    RappiderFontPickerModule,
    RappiderCardsModule,
    RappiderAssetBrowserModule,
    CardSelectorModule,
    RappiderTreeSelectModule,
  ],
})
export class ComponentsModule {}
