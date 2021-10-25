import { createStyles } from '@udecode/plate-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';
import { TableRowElementStyleProps } from './TableRowElement.types';

export const getTableRowElementStyles = (props: TableRowElementStyleProps) => {
  return createStyles(
    { prefixClassNames: 'TableRowElement', ...props },
    {
      root: [tw`border-red-500`, css``],
    }
  );
};
