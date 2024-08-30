import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('my-button')
export class Button extends LitElement {

  render() {
    return html`<button><slot/><div> `;
  }
}
