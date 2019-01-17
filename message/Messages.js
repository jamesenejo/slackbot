import {
  Button, SlackAttachment, TextWithAttachment
} from './classes';

class Messages {
  static WelcomeMessage() {
    const stupidButton = new Button('Stupid', 'stupid', 'button', 'stupid');
    const crazyButton = new Button('Crazy', 'crazy', 'button', 'crazy');
    const getLostButton = new Button('Get lost!', 'getLost', 'button', 'getLost');

    const actions = [stupidButton, crazyButton, getLostButton];

    const attachments = [new SlackAttachment('Choose the rude response you want', 'rudeOptions', actions)];

    const message = new TextWithAttachment('I hate that you are here!', attachments);
    return message;
  }
}

export default Messages;
