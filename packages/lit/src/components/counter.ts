import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-counter')
export class Input extends LitElement {

static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;

  @property({ type: String }) label = 'Increment counter';
  @property({ type: Number }) count = 0;

  render() {
    return html`
        <button @click=${this.inc} class="planet">${this.label}</button>
    `;
  }

  inc(){
    this.count++;
  }
}
