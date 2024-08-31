import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-counter')
export class Input extends LitElement {

  static override styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: slategrey
    }
  `;

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
      <div>
        <p>Counter: ${count}</p>
        <button @click=${incrementCounter}>Increment</button>
      </div>
    `;
  }
}
