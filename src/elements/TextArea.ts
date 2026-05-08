import SCSS from './TextArea.scss?inline';

/** */
export class AppTextArea extends HTMLElement {
  static readonly __name__ = 'app-text-area';
  label!: string;
  name!: string;

  readonly #shadow = this.attachShadow({ mode: 'open' });

  constructor () {
    super();
    this.#shadow.innerHTML = `
      <style>${SCSS}</style>
      <label>
        <span>${this.getAttribute('label')}</span>
        <textarea
          name=${this.getAttribute('name')}
        ></textarea>
        <small></small>
      </label>`;
  }
}

if (!window.customElements.get(AppTextArea.__name__))
  window.customElements.define(AppTextArea.__name__, AppTextArea);

declare global {
  interface HTMLElementTagNameMap {
    ['app-text-area']: AppTextArea;
  }
}