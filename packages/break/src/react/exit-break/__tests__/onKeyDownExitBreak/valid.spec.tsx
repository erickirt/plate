/** @jsx jsxt */

import { createEditor } from '@udecode/plate';
import { createPlateEditor, getEditorPlugin } from '@udecode/plate/react';
import * as isHotkey from '@udecode/plate-core';
import { jsxt } from '@udecode/plate-test-utils';

import { ExitBreakPlugin } from '../../ExitBreakPlugin';
import { onKeyDownExitBreak } from '../../onKeyDownExitBreak';

jsxt;

const input = createEditor(
  (
    <editor>
      <hp>
        te
        <cursor />
        st
      </hp>
    </editor>
  ) as any
);

const event = new KeyboardEvent('keydown') as any;

const output = (
  <editor>
    <hp>test</hp>
    <hdefault>
      <htext />
      <cursor />
    </hdefault>
  </editor>
) as any;

it('should be', () => {
  jest.spyOn(isHotkey, 'isHotkey').mockReturnValue(true);
  onKeyDownExitBreak({
    ...getEditorPlugin(
      createPlateEditor({ editor: input }),
      ExitBreakPlugin.configure({
        options: {
          rules: [{ before: false, hotkey: 'mod+enter', level: 0 }],
        },
      })
    ),
    event,
  });
  expect(input.children).toEqual(output.children);
  expect(input.selection?.anchor).toEqual({ offset: 0, path: [1, 0] });
});
