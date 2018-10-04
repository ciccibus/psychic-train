export default class DelegatedListener {
  constructor(delegated) {
    this.delegated = delegated;
  }

  handleEvent(event) {
    this.delegated["on" + event.type](event, this);
  }
}
