/**
 * This is a generated file. Do not modify it manually.
 *
 * @script ./node_modules/.bin/ts-node packages/icon/scripts/build.ts
 * @checksum bc31f021265a69fc0ed07896777c3ae3
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@leafygreen-ui/emotion';
import { IdAllocator } from '@leafygreen-ui/lib';
import { getGlyphTitle, sizeMap } from '../glyphCommon';
import { LGGlyph } from '../types';
export interface SortAscendingProps extends LGGlyph.ComponentProps {}
const idAllocator = IdAllocator.create('SortAscending');

const SortAscending = ({
  className,
  size = 16,
  title,
  titleId: customTitleId,
  fill,
  ...props
}: SortAscendingProps) => {
  const titleId = React.useMemo(() => customTitleId || idAllocator.generate(), [
    customTitleId,
  ]);
  const fillStyle = css`
    color: ${fill};
  `;
  const noFlexShrink = css`
    flex-shrink: 0;
  `;
  title = getGlyphTitle('SortAscending', title);
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
        <title id={titleId}>{'Glyphs / Sorting / Sort Ascending'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <desc>{'Created with Sketch.'}</desc>
      <g
        id="Glyphs-/-Sorting-/-Sort-Ascending"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M3.7395,2.1905 C3.9935,1.9365 4.4055,1.9365 4.6595,2.1905 L4.6595,2.1905 L6.9565,4.4895 C7.2105,4.7425 7.2105,5.1545 6.9565,5.4085 C6.7035,5.6625 6.2915,5.6625 6.0375,5.4085 L6.0375,5.4085 L4.8735,4.2445 L4.8735,13.2535 C4.8735,13.6125 4.5825,13.9035 4.2235,13.9035 C3.8645,13.9035 3.5735,13.6125 3.5735,13.2535 L3.5735,13.2535 L3.5735,4.1955 L2.3595,5.4085 L2.278904,5.477053 C2.02487,5.65978 1.6691,5.6362 1.4405,5.4085 C1.1865,5.1545 1.1865,4.7425 1.4405,4.4895 L1.4405,4.4895 Z M11.0363,12.2126 C11.3943,12.2126 11.6853,12.5036 11.6853,12.8626 C11.6853,13.2216 11.3943,13.5126 11.0363,13.5126 L11.0363,13.5126 L8.4553,13.5126 C8.0963,13.5126 7.8053,13.2216 7.8053,12.8626 C7.8053,12.5036 8.0963,12.2126 8.4553,12.2126 L8.4553,12.2126 Z M12.1388,8.8909 C12.4978,8.8909 12.7888,9.1819 12.7888,9.5409 C12.7888,9.8999 12.4978,10.1909 12.1388,10.1909 L12.1388,10.1909 L8.4548,10.1909 C8.0958,10.1909 7.8048,9.8999 7.8048,9.5409 C7.8048,9.1819 8.0958,8.8909 8.4548,8.8909 L8.4548,8.8909 Z M13.2648,5.5686 C13.6228,5.5686 13.9138,5.8596 13.9138,6.2186 C13.9138,6.5776 13.6228,6.8686 13.2648,6.8686 L13.2648,6.8686 L8.4548,6.8686 C8.0958,6.8686 7.8048,6.5776 7.8048,6.2186 C7.8048,5.8596 8.0958,5.5686 8.4548,5.5686 L8.4548,5.5686 Z M14.1329,2.2468 C14.4919,2.2468 14.7829,2.5378 14.7829,2.8968 C14.7829,3.2558 14.4919,3.5468 14.1329,3.5468 L14.1329,3.5468 L8.4549,3.5468 C8.0959,3.5468 7.8049,3.2558 7.8049,2.8968 C7.8049,2.5378 8.0959,2.2468 8.4549,2.2468 L8.4549,2.2468 Z"
          id="Combined-Shape"
          fill={'currentColor'}
        />
      </g>
    </svg>
  );
};

SortAscending.displayName = 'SortAscending';
SortAscending.isGlyph = true;
SortAscending.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};
export default SortAscending;
