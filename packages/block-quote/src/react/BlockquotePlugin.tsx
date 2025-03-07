import { Key, toPlatePlugin } from '@udecode/plate/react';

import { BaseBlockquotePlugin } from '../lib/BaseBlockquotePlugin';

export const BlockquotePlugin = toPlatePlugin(
  BaseBlockquotePlugin,
  ({ editor, type }) => ({
    shortcuts: {
      toggleBlockquote: {
        keys: [[Key.Mod, Key.Shift, 'period']],
        preventDefault: true,
        handler: () => {
          editor.tf.toggleBlock(type);
        },
      },
    },
  })
);
