/**
 * This is a generated file. Do not modify it manually.
 *
 * @script ./node_modules/.bin/ts-node packages/icon/scripts/build.ts
 * @checksum aad03fd25cf011601c907c5430f14dc3
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@leafygreen-ui/emotion';
import { IdAllocator } from '@leafygreen-ui/lib';
import { getGlyphTitle, sizeMap } from '../glyphCommon';
import { LGGlyph } from '../types';
export interface MegaphoneProps extends LGGlyph.ComponentProps {}
const idAllocator = IdAllocator.create('Megaphone');

const Megaphone = ({
  className,
  size = 16,
  title,
  titleId: customTitleId,
  fill,
  ...props
}: MegaphoneProps) => {
  const titleId = React.useMemo(() => customTitleId || idAllocator.generate(), [
    customTitleId,
  ]);
  const fillStyle = css`
    color: ${fill};
  `;
  const noFlexShrink = css`
    flex-shrink: 0;
  `;
  title = getGlyphTitle('Megaphone', title);
  return (
    <svg
      className={cx(
        {
          [fillStyle]: fill != null,
        },
        noFlexShrink,
        className,
      )}
      height={typeof size === 'number' ? size : sizeMap[size]}
      width={typeof size === 'number' ? size : sizeMap[size]}
      {...props}
      viewBox="0 0 16 16"
      role="img"
      aria-labelledby={titleId}
    >
      {title === undefined ? (
        <title id={titleId}>{'Glyphs / Megaphone'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <desc>{'Created with Sketch.'}</desc>
      <g
        id="Glyphs-/-Megaphone"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M15,7.09374998 C15,6.49376951 14.6852431,5.97554686 14.2222222,5.69421874 L14.2222222,1.8127539 C14.2222222,1.59058594 14.0525695,1 13.4444445,1 C13.2713889,1 13.0995486,1.06042969 12.9588195,1.17824219 L10.8921181,2.9055664 C9.85402781,3.77240233 8.55076391,4.24999999 7.22222225,4.24999999 L2.55555556,4.24999999 C1.69635417,4.24999999 1,4.9774414 1,5.87499998 L1,8.31249998 C1,9.21005856 1.69635417,9.93749997 2.55555556,9.93749997 L3.37465279,9.93749997 C3.34086806,10.2035937 3.32166667,10.4742578 3.32166667,10.75 C3.32166667,11.7597851 3.54673612,12.7139648 3.94291668,13.5668358 C4.06906252,13.8382616 4.34444446,14 4.63319445,14 L6.43861113,14 C7.07177086,14 7.45190974,13.2423437 7.06812502,12.7162499 C6.66951391,12.1698437 6.43253474,11.4883593 6.43253474,10.75 C6.43253474,10.4679101 6.47190974,10.1967382 6.53972224,9.93749997 L7.22222225,9.93749997 C8.55076391,9.93749997 9.85402781,10.4150976 10.891875,11.2819336 L12.9585765,13.0092578 C13.0964165,13.1244854 13.2676604,13.1873383 13.4442014,13.1875 C14.0498959,13.1875 14.2219792,12.6091015 14.2219792,12.375 L14.2219792,8.49353513 C14.6852431,8.21195309 15,7.69373044 15,7.09374998 Z M12.6666667,10.6844922 L11.8633681,10.013164 C10.5508681,8.91628904 8.90222225,8.31249998 7.22222225,8.31249998 L7.22222225,5.87499998 C8.90222225,5.87499998 10.5508681,5.27121092 11.8633681,4.17433592 L12.6666667,3.5030078 L12.6666667,10.6844922 Z"
          id="Shape"
          fill={'currentColor'}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

Megaphone.displayName = 'Megaphone';
Megaphone.isGlyph = true;
Megaphone.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};
export default Megaphone;
