import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudTableViewConfig } from '../../utils/list-grid';
import { CardDataMapConfig, ItemActions, ListMode } from '../crud-view';
import { HeadingComponentConfig, HeadingType } from '../../utils/heading';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Action,
  ActionBehavior,
  RedirectUrlMode,
} from '../../utils/action-utils';
import { ButtonComponentConfig } from '../../utils/button';
import { TranslateService } from '@ngx-translate/core';
import { DropdownMenuComponentConfig } from '../../utils/dropdown-menu';
import { SwitchComponentConfig } from '../../utils/switch';
import { BreadcrumbOption } from 'ng-zorro-antd/breadcrumb';
import { InputGroupComponentConfig } from '../../utils/input-group';
import { IconType } from '../../utils/icon';
import { TemplatingService } from '../../services/templating/templating.service';
import { DEFAULT_CREATE_BUTTON_ICON } from '../crud-view/config/constants';
import {
  CARD_LIST_DELETE_ITEM_DEFAULT_ACTIONS,
  CARD_LIST_EDIT_ITEM_DEFAULT_ACTIONS,
  LIST_GRID_ITEM_DEFAULT_ACTIONS,
} from '../crud-view/config/list-grid-config';

@Component({
  selector: 'rappider-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.scss'],
})
export class RappiderListWrapperComponent implements OnInit {
  @Input() listMode = ListMode.Card;
  ListMode = ListMode;
  /* Crud configs */
  @Input() listGridConfig: CrudTableViewConfig;
  @Input() cardListConfig: CardDataMapConfig;
  @Input() isDataLoading = false;
  @Input() isListGridBorderless = true;
  @Input() redirectUrlData: Record<string, unknown>;
  /* data  */
  @Input() data: Record<string, unknown | any>[];
  /* flag to display or hide the toolbar */
  @Input() displayToolbar = false;
  /* explicit option to pass to the toolbar in order to set the visibility of back button */
  @Input() displayToolbarBackButton = false;
  /** title bar */
  @Input() titleBarActionMenu?: DropdownMenuComponentConfig;
  @Input() titleBarSwitchSettings: SwitchComponentConfig;

  titleBarRadioButtonSettings = [
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
  /* flag to display breadcrumb under title */
  @Input() displayBreadCrumb = true;
  @Input() breadCrumbOptions: BreadcrumbOption[] | string[] | string;
  @Input() titleBarActionButtons?: ButtonComponentConfig[] = [];
  /* Active item id in the path for editing or displaying the details of an item */
  activeItemId?: string;
  activeItem?: Record<string, unknown>;

  /* config to set title according to crud pages */
  @Input() mainTitleConfig: HeadingComponentConfig;

  @Input() showCreateButton = true;
  @Input() createButtonTitle = 'Create';
  @Input() addListGridItemDefaultActions = true;
  @Input() addCardItemDefaultActions = true;

  @Output() itemDeleted = new EventEmitter<any>();
  @Output() itemUpdated = new EventEmitter<any>();
  @Output() titleBarActionButtonClicked = new EventEmitter<Action>();
  @Output() cardListItemActionClicked = new EventEmitter<any>();
  @Output() cardListItemSelected = new EventEmitter<any>();

  cardListSearchText: string;

  cardSearchInputConfig: InputGroupComponentConfig = {
    textbox: {
      placeholder: 'Search',
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
      this.data?.length &&
      this.listGridConfig &&
      this.listGridConfig?.defaultSearchField
    ) {
      const filteredData = this.data.filter((item) =>
        item[this.listGridConfig.defaultSearchField]
          ?.toLowerCase()
          .includes(this.cardListSearchText.trim().toLowerCase())
      );
      return filteredData || [];
    }
    return this.data || [];
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private templatingService: TemplatingService
  ) {}

  /* get data and set view mode on init */
  ngOnInit(): void {
    this.getPathParameters();
    this.setTitleBarCreateActionButton();
    this.setListGridItemDefaultActionButtons();
  }

  setTitleBarCreateActionButton() {
    if (this.showCreateButton && !this.titleBarActionButtons?.length) {
      this.titleBarActionButtons.push(<ButtonComponentConfig>{
        key: 'create-item',
        text: this.createButtonTitle,
        icon: { name: DEFAULT_CREATE_BUTTON_ICON },
        behavior: ActionBehavior.Route,
      });
    }
  }

  /* get path parameters for view mode and editing item id */
  getPathParameters() {
    /* active item id is read from the path in order to show data to edit, e.g. /projects/edit/{id} */
    this.activeItemId = this.route.snapshot?.params?.itemId;
  }

  /* on delete */
  onItemDeleted(deletedItemAction: {
    action: Action;
    data: Record<string, unknown>;
  }) {
    if (deletedItemAction?.data?.id) {
      this.itemDeleted.emit(deletedItemAction?.data);
    }
  }

  /* on title bar action */
  onTitleBarActionButtonClicked(action: ButtonComponentConfig) {
    console.log(action);
  }

  onListGridListActionDropdownItemClick(item: any) {
    console.log(item);
  }

  onListGridColumnActionClick(actionData: { action: Action; data: any }): void {
    if (actionData.action?.name === ItemActions.Edit) {
    } else if (actionData.action?.name === ItemActions.Delete) {
      this.itemDeleted.emit(actionData);
    }
  }

  onTitleBarRadioButtonClick(selectedValue: string) {
    if (selectedValue === 'card-view') {
      this.listMode = ListMode.Card;
    } else {
      this.listMode = ListMode.Grid;
    }
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
}
