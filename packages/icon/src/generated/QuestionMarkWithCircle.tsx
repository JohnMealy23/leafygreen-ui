/**
 * This is a generated file. Do not modify it manually.
 *
 * @script ./node_modules/.bin/ts-node packages/icon/scripts/build.ts
 * @checksum 646afef2657ca3c3b48ca353297324db
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@leafygreen-ui/emotion';
import { IdAllocator } from '@leafygreen-ui/lib';
import { getGlyphTitle, sizeMap } from '../glyphCommon';
import { LGGlyph } from '../types';
export interface QuestionMarkWithCircleProps extends LGGlyph.ComponentProps {}
const idAllocator = IdAllocator.create('QuestionMarkWithCircle');

const QuestionMarkWithCircle = ({
  className,
  size = 16,
  title,
  titleId: customTitleId,
  fill,
  ...props
}: QuestionMarkWithCircleProps) => {
  const titleId = React.useMemo(() => customTitleId || idAllocator.generate(), [
    customTitleId,
  ]);
  const fillStyle = css`
    color: ${fill};
  `;
  const noFlexShrink = css`
    flex-shrink: 0;
  `;
  title = getGlyphTitle('QuestionMarkWithCircle', title);
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
        <title id={titleId}>{'Glyphs / Question Mark With Circle'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <desc>{'Created with Sketch.'}</desc>
      <g
        id="Glyphs-/-Question-Mark-With-Circle"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M8,15.25 C3.99593556,15.25 0.75,12.0040644 0.75,8 C0.75,3.99593556 3.99593556,0.75 8,0.75 C12.0040644,0.75 15.25,3.99593556 15.25,8 C15.25,12.0040644 12.0040644,15.25 8,15.25 Z M7.99,11 C7.29964406,11 6.74,11.5596441 6.74,12.25 C6.74,12.9403559 7.29964406,13.5 7.99,13.5 C8.68035594,13.5 9.24,12.9403559 9.24,12.25 C9.24,11.5596441 8.68035594,11 7.99,11 Z M4.84,6.511 L6.751,6.511 C6.751,6.27699883 6.77699974,6.05816768 6.829,5.8545 C6.88100026,5.65083231 6.96116613,5.47316742 7.0695,5.3215 C7.17783388,5.16983257 7.31649916,5.04850045 7.4855,4.9575 C7.65450085,4.86649954 7.85599883,4.821 8.09,4.821 C8.4366684,4.821 8.70749903,4.91633238 8.9025,5.107 C9.09750098,5.29766762 9.195,5.59233134 9.195,5.991 C9.20366671,6.22500117 9.16250045,6.41999922 9.0715,6.576 C8.98049954,6.73200078 8.86133407,6.87499935 8.714,7.005 C8.56666593,7.13500065 8.4063342,7.26499935 8.233,7.395 C8.0596658,7.52500065 7.89500078,7.67883244 7.739,7.8565 C7.58299922,8.03416755 7.44650059,8.24866541 7.3295,8.5 C7.21249942,8.75133459 7.14100013,9.06333147 7.115,9.436 L7.115,10.021 L8.87,10.021 L8.87,9.527 C8.90466684,9.2669987 8.989166,9.0503342 9.1235,8.877 C9.25783401,8.7036658 9.4116658,8.549834 9.585,8.4155 C9.7583342,8.28116599 9.94249903,8.146834 10.1375,8.0125 C10.332501,7.87816599 10.5101659,7.71566762 10.6705,7.525 C10.8308341,7.33433238 10.9651661,7.10466801 11.0735,6.836 C11.1818339,6.56733199 11.236,6.22500208 11.236,5.809 C11.236,5.55766541 11.1818339,5.28683478 11.0735,4.9965 C10.9651661,4.70616521 10.7853346,4.43533459 10.534,4.184 C10.2826654,3.93266541 9.95116873,3.72250084 9.5395,3.5535 C9.12783128,3.38449915 8.61433641,3.3 7.999,3.3 C7.52233095,3.3 7.09116859,3.38016586 6.7055,3.5405 C6.31983141,3.70083413 5.99050137,3.92399857 5.7175,4.21 C5.44449864,4.49600143 5.23216743,4.83399805 5.0805,5.224 C4.92883258,5.61400195 4.84866671,6.04299766 4.84,6.511 Z"
          fill={'currentColor'}
        />
      </g>
    </svg>
  );
};

QuestionMarkWithCircle.displayName = 'QuestionMarkWithCircle';
QuestionMarkWithCircle.isGlyph = true;
QuestionMarkWithCircle.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};
export default QuestionMarkWithCircle;
