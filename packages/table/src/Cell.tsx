import React from 'react';
import { HTMLElementProps, createDataProp } from '@leafygreen-ui/lib';
import { css, cx } from '@leafygreen-ui/emotion';
import { commonCellStyles } from './styles';

export const tdInnerDiv = createDataProp('td-inner-div');

interface HeaderCellProps
  extends HTMLElementProps<'th', HTMLTableHeaderCellElement> {
  isHeader: true;
}

interface TableCellProps extends HTMLElementProps<'td', HTMLTableCellElement> {
  isHeader?: false;
}

type CellProps = HeaderCellProps | TableCellProps;

const baseStyles = css`
  line-height: 20px;
  position: relative;
`;

const thStyles = css`
  font-weight: bold;
`;

const innerDivStyles = css`
  display: flex;
  align-items: center;
`;

const Cell = React.forwardRef(
  (
    { children, className, isHeader = false, ...rest }: CellProps,
    ref: React.Ref<any>,
  ) => {
    const Root = isHeader ? 'th' : 'td';

    const props: Partial<CellProps> = {
      ref,
      className: cx(
        commonCellStyles,
        baseStyles,
        { [thStyles]: isHeader },
        className,
      ),
    };

    if (isHeader) {
      props.scope = 'row';
    }

    return (
      <Root {...props} {...rest}>
        <div className={innerDivStyles} {...tdInnerDiv.prop}>
          {children}
        </div>
      </Root>
    );
  },
);

Cell.displayName = 'Cell';

export default Cell;
