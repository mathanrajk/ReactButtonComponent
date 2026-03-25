import React from 'react'
import './Button.css'

// eslint-disable-next-line react-refresh/only-export-components
export const ButtonVariant = {
  Standard: 'standard',
  Outlined: 'outlined',
  Flat: 'flat',
} as const;

export type ButtonVariant = typeof ButtonVariant[keyof typeof ButtonVariant];

/**
 * Props for the custom Button component.
 * Extends all standard HTML button attributes (e.g., disabled, type, aria-*).
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Adjusts the font-size of the button text in pixels.
   */
  size?: number;
  /**
   * Determines the primary visual style of the button.
   * 
   * - `Standard`: A typical button with a solid background.
   * - `Outlined`: A button with a transparent background and a prominent border.
   * - `Flat`: A minimalist button without a background or border.
   *
   * @default ButtonVariant.Standard
   */
  variant?: ButtonVariant;
  /**
   * Custom background color override applied via inline styles.
   */
  bgcolor?: string;
  /**
   * Custom text color override applied via inline styles.
   */
  color?: string;
  /**
   * Optional tooltip text displayed when the user hovers over the button.
   */
  title?: string;
}

/**
 * A customizable button component.
 */
function Button({ size, variant = ButtonVariant.Standard, bgcolor, color, title, style, className = '', children, ...props }: ButtonProps) {
  const combinedClassName = `btn btn-${variant} ${className}`.trim();

  return (
    <button
      className={combinedClassName}
      title={title}
      style={{ backgroundColor: bgcolor, color: color, fontSize: size ? `${size}px` : undefined, ...style }}
      {...props}
    >
      {children || 'Button'}
    </button>
  )
}

export default Button