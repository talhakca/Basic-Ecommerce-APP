import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { upperFirst } from 'lodash';
import { TemplatingService } from '../../services/templating/templating.service';
import {
  HeadingComponentConfig,
  BreadcrumbOption,
  ButtonComponentConfig,
  DropdownMenuComponentConfig,
  SwitchComponentConfig,
  CrudTableViewConfig,
  CrudFormConfig,
  DynamicDataForSelectBox,
  SelectableOptionWithTooltip,
  Action,
  ActionBehavior,
  HeadingType,
  RedirectUrlMode,
  InputGroupComponentConfig,
  IconType,
} from '../../utils';
import {
  DEFAULT_CREATE_BUTTON_ICON,
  DEFAULT_CREATE_BUTTON_TITLE_VERB,
} from './config/constants';
import {
  CARD_LIST_DELETE_ITEM_DEFAULT_ACTIONS,
  CARD_LIST_EDIT_ITEM_DEFAULT_ACTIONS,
  LIST_GRID_ITEM_DEFAULT_ACTIONS,
} from './config/list-grid-config';
import { CardDataMapConfig } from './model/card-data-map-config';
import { ItemActions, ListMode, ViewMode } from './model/enums';

@Component({
  selector: 'rappider-crud-view',
  templateUrl: './crud-view.component.html',
  styleUrls: ['./crud-view.component.scss'],
})
export class RappiderCrudViewComponent implements OnInit, OnChanges {
  // #region rappider-title-toolbar Inputs
  @Input() modelNameSingular: string;
  @Input() mainTitleConfig: HeadingComponentConfig;
  /* flag to display or hide the toolbar */
  @Input() displayToolbar = false;
  /* explicit option to pass to the toolbar in order to set the visibility of back button */
  @Input() displayToolbarBackButton = false;
  /* flag to display breadcrumb under title */
  @Input() displayBreadCrumb = true;
  @Input() breadCrumbOptions: BreadcrumbOption[] | string[] | string;
  @Input() titleBarActionButtons?: ButtonComponentConfig[] = [];
  @Input() showCreateButton?: boolean = true;
  @Input() createButtonTitle?: string;
  @Input() titleBarActionMenu?: DropdownMenuComponentConfig;
  @Input() titleBarSwitchSettings: SwitchComponentConfig;

  @Output() titleBarActionButtonClicked =
    new EventEmitter<ButtonComponentConfig>();

  // #endregion

  // #region rappider-list-grid Inputs

  @Input() listGridConfig: CrudTableViewConfig;
  @Input() listGridData: any[];
  /* if true, add edit and delete button for list grid item */
  @Input() addListGridItemDefaultActions = true;

  @Input() isListGridDataLoading: boolean;
  /* col span border */
  @Input() isListGridBorderless: boolean;

  /* redirection url data to be replaced in specified url template */
  @Input() redirectUrlData: Record<string, any>;

  /* Displays or hides the filter row */
  @Input() showFiltersRow?: boolean = false;

  @Output() itemDeleted = new EventEmitter<{ action: Action; data: any }>();

  // #endregion

  // #region rappider-card-lis Inputs
  @Input() cardListConfig: CardDataMapConfig;

  /* if true, add edit and delete button for the card item */
  @Input() addCardItemDefaultActions = true;

  @Output() cardListItemSelected = new EventEmitter<any>();
  @Output() cardListItemActionClicked = new EventEmitter<any>();
  // #endregion

  // #region rappider-edit-form Inputs

  /* configuration of the create form */
  @Input() createFormConfig: CrudFormConfig;
  /* data for default input values */
  @Input() createFormDefaultData: any;
  /* auto submit&dirty value for form */
  @Input() createFormSubmitted: boolean;
  /* loading status for submit button */
  @Input() createFormSubmitButtonLoading: boolean;
  /* dynamic data for select box */
  @Input() createFormDynamicDataForSelectBox: DynamicDataForSelectBox[];

  @Output() createFormSubmit = new EventEmitter<any>();

  // #endregion

  // #region rappider-edit-form Inputs

  /* configuration of the edit/update form */
  @Input() updateFormConfig: CrudFormConfig;
  /* data for default input values */
  @Input() updateFormData: any;
  /* auto submit&dirty value for form */
  @Input() updateFormSubmitted: boolean;
  /* loading status for submit button */
  @Input() updateFormSubmitButtonLoading: boolean;
  /* dynamic data for selectbox */
  @Input() updateFormDynamicDataForSelectBox: DynamicDataForSelectBox[];

  @Output() updateFormSubmit = new EventEmitter<any>();

  // #endregion

  // #region internal Inputs

  /* view mode for the crud pages */
  @Input() viewMode?: ViewMode = ViewMode.List;

  /* list mode for the view page: options are grid or card view */
  @Input() listMode?: ListMode = ListMode.Card;

  // #endregion

  ViewMode = ViewMode;
  ListMode = ListMode;

  /* flag to render the page when all config is ready */
  loading = true;

  /* radio button settings for grid and card views */
  titleBarRadioButtonSettings: SelectableOptionWithTooltip[] = [];

  cardListSearchText: string;
  /* card data is filtered listGridData according to the search text (and possible filters) */
  cardSearchInputConfig: InputGroupComponentConfig = {
    textbox: {
      placeholder: 'Search issues',
    },
    suffixIcon: {
      name: 'fas fa-search',
      type: IconType.FontAwesome,
    },
  };

  /* filter listGridData according to the cardListSearchValue */
  get filteredCardData() {
    if (
      this.cardListSearchText &&
      this.cardListSearchText.trim() &&
      this.listGridData?.length &&
      this.listGridConfig &&
      this.listGridConfig?.defaultSearchField
    ) {
      const filteredData = this.listGridData.filter((item) =>
        item[this.listGridConfig.defaultSearchField]
          ?.toLowerCase()
          .includes(this.cardListSearchText.trim().toLowerCase())
      );
      return filteredData || [];
    }
    return this.listGridData || [];
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private templatingService: TemplatingService
  ) {}

  ngOnInit(): void {
    this.setTitleBarCreateActionButton();
    this.setListModeRadioButtons();
    this.setListGridItemDefaultActionButtons();
    this.loading = false;
  }

  ngOnChanges(): void {
    console.log(this.viewMode);
  }

  setTitleBarCreateActionButton() {
    if (this.showCreateButton && this.viewMode === ViewMode.List) {
      this.titleBarActionButtons.push(<ButtonComponentConfig>{
        key: 'create-item',
        text:
          this.createButtonTitle ||
          `${DEFAULT_CREATE_BUTTON_TITLE_VERB} ${upperFirst(
            this.modelNameSingular?.toLowerCase() || ''
          )}`,
        icon: { name: DEFAULT_CREATE_BUTTON_ICON },
        behavior: ActionBehavior.Route,
      });
    }
  }

  setListModeRadioButtons() {
    if (this.viewMode === ViewMode.List) {
      this.titleBarRadioButtonSettings = [
        {
          key: '<i class="fa-light fa-table-list"></i>',
          value: 'grid-view',
          tooltipText: 'Grid View',
        },
        {
          key: '<i class="fa-thin fa-grid-2"></i>',
          value: 'card-view',
          tooltipText: 'Card View',
        },
      ];
    } else {
      this.titleBarRadioButtonSettings = [];
    }
  }

  /* Add edit and delete action buttons for list grid item */
  setListGridItemDefaultActionButtons(): void {
    if (this.addListGridItemDefaultActions && this.listGridConfig) {
      if (this.listGridConfig.itemActions?.length) {
        this.listGridConfig.itemActions
          .filter(
            (i) => i.name === ItemActions.Edit || i.name === ItemActions.Delete
          )
          .push(...LIST_GRID_ITEM_DEFAULT_ACTIONS);
      } else {
        this.listGridConfig.itemActions = LIST_GRID_ITEM_DEFAULT_ACTIONS;
      }
    }

    if (this.addCardItemDefaultActions && this.cardListConfig) {
      this.cardListConfig.deleteItemActionButton =
        CARD_LIST_DELETE_ITEM_DEFAULT_ACTIONS;
      this.cardListConfig.editItemActionButton =
        CARD_LIST_EDIT_ITEM_DEFAULT_ACTIONS;
    }
  }

  onListGridListActionDropdownItemClick(item: any): void {
    console.log(item);
  }

  onListGridColumnActionClick(actionData: { action: Action; data: any }): void {
    console.log(actionData);
    if (actionData.action?.name === ItemActions.Edit) {
      console.log(actionData.action);
    } else if (actionData.action?.name === ItemActions.Delete) {
      this.itemDeleted.emit(actionData);
    }
  }

  onUpdateFormValueChange(value: any): void {
    console.log(value);
  }

  onUpdateFormSubmit(value: any): void {
    console.log(value);
    this.updateFormSubmit.emit(value);
  }

  onCreateFormValueChange(value: any): void {}

  onCreateFormSubmit(value: any): void {
    console.log(value);
    this.createFormSubmit.emit(value);
  }

  onTitleBarActionButtonClick(action) {
    if (action?.key === 'create-item') {
      if (action?.behavior === ActionBehavior.Route) {
        this.router.navigate(['create'], { relativeTo: this.route });
      } else if (action.behavior === ActionBehavior.Emit) {
        this.titleBarActionButtonClicked.emit(action);
      }
    }
  }

  onTitleBarRadioButtonClick(selectedValue: string) {
    if (selectedValue === 'card-view') {
      this.listMode = ListMode.Card;
    } else {
      this.listMode = ListMode.Grid;
    }
  }

  /* returns subtitles array for card view */
  getCardSubtitles(cardData: any): HeadingComponentConfig[] {
    if (this.cardListConfig?.getSubTitlesFunction) {
      return this.cardListConfig?.getSubTitlesFunction(cardData);
    } else if (this.cardListConfig?.subtitleFieldNames?.length) {
      return (
        this.cardListConfig?.subtitleFieldNames?.map(
          (subtitleFieldName) =>
            <HeadingComponentConfig>{
              content: cardData[subtitleFieldName],
              type: HeadingType.H6,
            }
        ) || []
      );
    }
    return [];
  }

  onCardViewActionClick(action: any, cardData: any) {
    console.log(action);
    console.log(cardData);
    const buttonAction = action?.button || action;
    if (buttonAction?.behavior === ActionBehavior.Route) {
      this.redirectToUrlByAction(buttonAction, cardData);
    } else if (buttonAction?.behavior === ActionBehavior.Emit) {
      if (buttonAction?.name === ItemActions.Delete) {
        this.itemDeleted.emit({ action: buttonAction, data: cardData });
      } else {
        this.cardListItemActionClicked.emit({
          action: buttonAction,
          data: cardData,
        });
      }
    }
  }

  onCardViewItemSelected(item: any) {
    console.log(item);
    if (this.cardListConfig?.cardItemClickBehavior === ActionBehavior.Route) {
      this.redirectToUrlByAction(
        {
          behavior: ActionBehavior.Route,
          redirectUrlMode: RedirectUrlMode.Navigate,
          redirectUrl: this.cardListConfig?.cardItemRouterLink || '',
        },
        item
      );
    } else {
      this.cardListItemSelected.emit(item);
    }
  }

  redirectToUrlByAction(action: Action, data: any) {
    /* navigate */
    let url = action.redirectUrl;
    /* set id if specified */
    if (action.redirectUrl && data?.id) {
      url = this.templatingService.execTemplate(action.redirectUrl, data);
    }
    if (action?.redirectUrlMode === 'navigate') {
      this.router.navigate([url], { relativeTo: this.route });
    } else {
      this.router.navigateByUrl(url);
    }
  }
}
