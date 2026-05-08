import SCSS from './TextInput.scss?inline';

/** */
export class AppTextInput extends HTMLElement {
  static readonly __name__ = 'app-text-input';
  label!: string;
  name!: string;

  readonly #shadow = this.attachShadow({ mode: 'open' });

  constructor () {
    super();
    this.#shadow.innerHTML = `
      <style>${SCSS}</style>
      <label>
        <span>${this.getAttribute('label')}</span>
        <input 
          type=${this.getAttribute('type') || 'text'}
          name=${this.getAttribute('name')}
        />
        <small></small>
      </label>`;
  }
}

if (!window.customElements.get(AppTextInput.__name__))
  window.customElements.define(AppTextInput.__name__, AppTextInput);

declare global {
  interface HTMLElementTagNameMap {
    ['app-text-input']: AppTextInput;
  }
}