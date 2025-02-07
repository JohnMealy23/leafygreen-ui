/**
 * This is a generated file. Do not modify it manually.
 *
 * @script ./node_modules/.bin/ts-node packages/icon/scripts/build.ts
 * @checksum e2290f1f2ee87c23a0cca7232526b32e
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@leafygreen-ui/emotion';
import { IdAllocator } from '@leafygreen-ui/lib';
import { getGlyphTitle, sizeMap } from '../glyphCommon';
import { LGGlyph } from '../types';
export interface SettingsProps extends LGGlyph.ComponentProps {}
const idAllocator = IdAllocator.create('Settings');

const Settings = ({
  className,
  size = 16,
  title,
  titleId: customTitleId,
  fill,
  ...props
}: SettingsProps) => {
  const titleId = React.useMemo(() => customTitleId || idAllocator.generate(), [
    customTitleId,
  ]);
  const fillStyle = css`
    color: ${fill};
  `;
  const noFlexShrink = css`
    flex-shrink: 0;
  `;
  title = getGlyphTitle('Settings', title);
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
        <title id={titleId}>{'Settings'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <desc>{'Created with Sketch.'}</desc>
      <g
        id="Settings-Copy"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M15.5,8.5 L13.8515625,9.328125 L13.734375,9.78125 L14.7421875,11.3203125 L14.2421875,12.1796875 L12.3984375,12.0703125 C12.296875,12.1875 12.1875,12.296875 12.0703125,12.3984375 L12.1796875,14.2421875 L11.3203125,14.7421875 L9.78125,13.734375 L9.328125,13.8515625 L8.5,15.5 L7.5,15.5 L6.671875,13.8515625 L6.21875,13.734375 L4.6796875,14.7421875 L3.8203125,14.2421875 L3.9296875,12.3984375 C3.8125,12.296875 3.703125,12.1875 3.6015625,12.0703125 L1.7578125,12.1796875 L1.2578125,11.3203125 L2.265625,9.78125 L2.1484375,9.328125 L0.5,8.5 L0.5,7.5 L2.1484375,6.671875 L2.265625,6.21875 L1.2578125,4.6796875 L1.7578125,3.8203125 L3.6015625,3.9296875 C3.703125,3.8125 3.8125,3.703125 3.9296875,3.6015625 L3.8203125,1.7578125 L4.6796875,1.2578125 L6.21875,2.265625 L6.671875,2.1484375 L7.5,0.5 L8.5,0.5 L9.328125,2.1484375 L9.78125,2.265625 L11.3203125,1.2578125 L12.1796875,1.7578125 L12.0703125,3.6015625 C12.1875,3.703125 12.296875,3.8125 12.3984375,3.9296875 L14.2421875,3.8203125 L14.7421875,4.6796875 L13.734375,6.21875 L13.8515625,6.671875 L15.5,7.5 L15.5,8.5 Z M8,3.5 C7.359375,3.5 6.75,3.6328125 6.1953125,3.8828125 L7.2109375,5.640625 C7.4609375,5.5546875 7.7265625,5.5 8,5.5 C8.2734375,5.5 8.5390625,5.5546875 8.7890625,5.640625 L9.8046875,3.8828125 C9.25,3.6328125 8.640625,3.5 8,3.5 Z M5.3359375,4.3828125 C4.3515625,5.109375 3.671875,6.2265625 3.53125,7.5 L5.546875,7.5 C5.65625,6.9609375 5.953125,6.4921875 6.34375,6.140625 L5.3359375,4.3828125 Z M10.453125,7.5 L12.46875,7.5 C12.328125,6.2265625 11.6484375,5.109375 10.6640625,4.3828125 L9.65625,6.140625 C10.046875,6.4921875 10.34375,6.9609375 10.453125,7.5 Z M9,8 C9,7.4453125 8.5546875,7 8,7 C7.4453125,7 7,7.4453125 7,8 C7,8.5546875 7.4453125,9 8,9 C8.5546875,9 9,8.5546875 9,8 Z M3.53125,8.5 C3.671875,9.7734375 4.3515625,10.890625 5.3359375,11.6171875 L6.34375,9.859375 C5.953125,9.5078125 5.65625,9.0390625 5.546875,8.5 L3.53125,8.5 Z M10.6640625,11.6171875 C11.6484375,10.890625 12.328125,9.7734375 12.46875,8.5 L10.453125,8.5 C10.34375,9.0390625 10.046875,9.5078125 9.65625,9.859375 L10.6640625,11.6171875 Z M8,12.5 C8.640625,12.5 9.25,12.359375 9.8046875,12.1171875 L8.7890625,10.359375 C8.5390625,10.4453125 8.2734375,10.5 8,10.5 C7.7265625,10.5 7.4609375,10.4453125 7.2109375,10.359375 L6.1953125,12.1171875 C6.75,12.359375 7.359375,12.5 8,12.5 Z"
          id="\uE313"
          fill={'currentColor'}
        />
      </g>
    </svg>
  );
};

Settings.displayName = 'Settings';
Settings.isGlyph = true;
Settings.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};
export default Settings;
