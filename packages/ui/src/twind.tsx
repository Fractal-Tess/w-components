import {  LitElement, } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Button } from './components/ui/button';
import { createRoot } from 'react-dom/client';
import {  cssomSheet,} from 'twind';
import config from '../twind.config'
import install from '@twind/with-web-components'
import type {ComponentProps} from 'react'

const withTwind = install(config)

const sheet = cssomSheet({ target: new CSSStyleSheet() })

@customElement('my-button')
export class MyButton extends withTwind(LitElement) {
  static styles = [sheet.target]


  @property({ type: String }) variant: ComponentProps<typeof Button>['variant'] = 'default';

  connectedCallback() {
    super.connectedCallback();
    createRoot(this.shadowRoot!).render(<Button variant={this.variant} tw={this.tw}><slot/></Button>);
  }
}
