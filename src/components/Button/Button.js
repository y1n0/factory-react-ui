import { forwardRef } from "react";




const Button = forwardRef(
    (
        {
          a11yTitle,
          color,
          children,
          disabled,
          focusIndicator = true,
          gap = 'small',
          fill,
          href,
          onBlur,
          onClick,
          onFocus,
          onMouseOut,
          onMouseOver,
          plain,
          primary,
          reverse,
          size,
          type = 'button',
          as,
          ...rest
        },
        ref,
      ) => {

        const domTag = !as && href ? 'a' : as;



      }
);