import { createSlatePlugin, findHtmlParentElement, KEYS } from 'platejs';

/** Enables support for code formatting */
export const BaseCodePlugin = createSlatePlugin({
  key: KEYS.code,
  node: { isLeaf: true },
  parsers: {
    html: {
      deserializer: {
        rules: [
          { validNodeName: ['CODE'] },
          { validStyle: { fontFamily: 'Consolas' } },
        ],
        query({ element }) {
          const blockAbove = findHtmlParentElement(element, 'P');

          if (blockAbove?.style.fontFamily === 'Consolas') return false;

          return !findHtmlParentElement(element, 'PRE');
        },
      },
    },
  },
  render: { as: 'code' },
  rules: { selection: { affinity: 'hard' } },
}).extendTransforms(({ editor, type }) => ({
  toggle: () => {
    editor.tf.toggleMark(type);
  },
}));
