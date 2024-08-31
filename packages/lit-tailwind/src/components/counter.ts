import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {TWStyles} from 'tw2lit'

@customElement('my-counter')
class MyElement extends LitElement {
  static styles = [TWStyles]

  @property({type: Number})
  accessor count:number

  constructor() {
    super();
    this.count = 0
  }

  incrementCounter() {
    this.count += 1;
  }

  render() {
    const {count, incrementCounter} = this

    return html`
      <div>
        <p class="text-emerald-500 p-4">Counter: ${count}</p>
        <button @click=${incrementCounter}>Increment</button>
      </div>
    `;
  }
}
