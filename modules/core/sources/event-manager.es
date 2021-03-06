export default class EventManager {
  constructor(subscribe) {
    this._subscribe = subscribe;
    this._subscriptions = new Map();
  }

  api() {
    return {
      addListener: (listener) => {
        const unsub = this._subscribe(listener);
        this._subscriptions.set(listener, unsub);
      },
      removeListener: (listener) => {
        const unsub = this._subscriptions.get(listener);
        if (!listener) {
          return;
        }
        unsub();
        this._subscriptions.delete(listener);
      },
      hasListener: listener => this._subscriptions.has(listener),
      hasListeners: () => this._subscriptions.size > 0,
    };
  }

  destroy() {
    for (const [, unsub] of this._subscriptions) {
      unsub();
    }
    this._subscriptions.clear();
  }
}
