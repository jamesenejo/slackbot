export class Text {
  constructor(text) {
    this.text = text;
  }
}

export class Button {
  constructor(text, name, type, value) {
    this.text = text;
    this.name = name;
    this.type = type;
    this.value = value;
  }
}

export class SlackAttachment {
  constructor(text, callbackId, actions) {
    this.text = text;
    this.callback_id = callbackId;
    this.actions = actions;
  }
}

export class TextWithAttachment extends Text {
  constructor(text, attachments) {
    super(text);
    this.attachments = attachments;
  }
}
