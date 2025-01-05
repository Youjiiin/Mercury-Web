import { type ElementType, forwardRef } from "react";
import { Box, type BoxRef } from "./Box";
import type { BoxProps } from "./Box";

type Props = {
  w?: string;
  h?: string;
};

export const Skeleton = forwardRef(function Skeleton<C extends ElementType = "div">(
  { as, className, w, h, style, variant, ...rest }: BoxProps<C> & Props,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;

  return (
    <Box
      className={`xui-skeleton-color animate-pulse ${className}`}
      style={{ width: w, height: h, ...style }}
      ref={ref}
      as={as}
      {...typesRest}
    />
  );
}) as <C extends ElementType = "div">(
  props: BoxProps<C> & Props & { ref?: BoxRef<C> },
) => JSX.Element;
