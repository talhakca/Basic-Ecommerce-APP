/* eslint-disable @typescript-eslint/naming-convention */
import { ButtonComponentConfig } from '../../../utils/button';
import {
  Action,
  ActionBehavior,
  RedirectUrlMode,
} from '../../../utils/action-utils';
import { ItemActions } from '../model/enums';

export const LIST_GRID_ITEM_DEFAULT_ACTIONS: Action[] = [
  {
    text: 'Edit',
    name: ItemActions.Edit,
    behavior: ActionBehavior.Route,
    icon: { name: 'far fa-edit' },
    redirectUrl: './edit/{{id}}',
    redirectUrlMode: RedirectUrlMode.Navigate,
  },
  {
    text: 'Delete',
    name: ItemActions.Delete,
    behavior: ActionBehavior.Emit,
    icon: { name: 'far fa-trash' },
    popconfirmTitle: 'Are you sure you want to delete this item?',
    emitWithoutPopconfirm: false,
  },
];

export const CARD_LIST_EDIT_ITEM_DEFAULT_ACTIONS: Action = {
  text: '',
  name: ItemActions.Edit,
  behavior: ActionBehavior.Route,
  icon: { name: 'far fa-edit' },
  redirectUrl: './edit/{{id}}',
  redirectUrlMode: RedirectUrlMode.Navigate,
  tooltipText: 'Edit',
};

export const CARD_LIST_DELETE_ITEM_DEFAULT_ACTIONS: Action = {
  text: '',
  name: ItemActions.Delete,
  behavior: ActionBehavior.Emit,
  icon: { name: 'far fa-trash' },
  popconfirmTitle: 'Are you sure you want to delete this item?',
  emitWithoutPopconfirm: false,
  tooltipText: 'Delete',
};
