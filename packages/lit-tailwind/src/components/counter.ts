import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {TWStyles} from 'tw2lit'

@customElement('my-counter')
export class MyElement extends LitElement {
  static override styles = [TWStyles]

  @property({type: Number})
  accessor count:number

  constructor() {
    super();
    this.count = 0
  }

  incrementCounter() {
    this.count += 1;
  }

  override render() {
    const {count, incrementCounter} = this

    return html`
      <div class='bg-slate-400 inline-flex flex-col'>
        <p class="p-4">Counter: ${count}</p>
        <button @click=${incrementCounter}>Increment</button>
      </div>
    `;
  }
}
