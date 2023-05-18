import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../utils/chat/chat-message.interface';
import { MessageSenderType } from '../../utils/chat/message-sender-type.enum';
import { InputGroupComponentConfig } from '../../utils/input-group/input-group-component-config.interface';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-chat-one',
  templateUrl: './chat-one.component.html',
  styleUrls: ['./chat-one.component.scss'],
})
export class RappiderChatOneComponent {
  /* message interface */
  @Input() items: ChatMessage[];
  /* card description */
  @Input() description: TextComponentConfig;
  @Input() inputGroup: InputGroupComponentConfig;

  MessageSenderType = MessageSenderType;
}
