
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-input')
export class Input extends LitElement {
  @property({ type: String }) label = 'Click me';

  render() {
    return html`
      <label>${this.label}</label>
      <input type='text'/>
    `
  }
}
