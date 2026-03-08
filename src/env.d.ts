import type { AppTextInput } from './elements/TextInput';

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    /** Attr */
    "my-count"?: number;
    // "data-label"?: string;
  }

  // Add a CSS custom property to the style object
  interface CSSProperties {
    // "--theme-color"?: "black" | "white";
  }

  interface HTMLElementTagNameMap {
    ['app-text-input']: AppTextInput;
  }
}