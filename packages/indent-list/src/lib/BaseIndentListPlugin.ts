import {
  type PluginConfig,
  type SlateRenderElementProps,
  type TElement,
  BaseParagraphPlugin,
  createTSlatePlugin,
  HtmlPlugin,
  isHtmlBlockElement,
  postCleanHtml,
  traverseHtmlElements,
} from '@udecode/plate';

import type { GetSiblingIndentListOptions } from './queries/getSiblingIndentList';
import type { ListStyleType } from './types';

import { renderIndentListBelowNodes } from './renderIndentListBelowNodes';
import { withIndentList } from './withIndentList';

/**
 * All list items are normalized to have a listStart prop indicating their
 * position in the list (unless listStart would be 1, in which case it is
 * omitted).
 *
 * ListRestart causes listStart to restart from the given number, regardless of
 * any previous listStart.
 *
 * ListRestartPolite acts like listRestart, except it only takes effect for list
 * items at the start of a list. When not at the start of a list, this prop is
 * ignored, although it is not removed and may take effect in the future.
 */

export const INDENT_LIST_KEYS = {
  checked: 'checked',
  listRestart: 'listRestart',
  listRestartPolite: 'listRestartPolite',
  listStart: 'listStart',
  todo: 'todo',
} as const;

export type BaseIndentListConfig = PluginConfig<
  'listStyleType',
  {
    getSiblingIndentListOptions?: GetSiblingIndentListOptions<TElement>;
    listStyleTypes?: Record<
      string,
      {
        type: string;
        isOrdered?: boolean;
        liComponent?: React.FC<SlateRenderElementProps>;
        markerComponent?: React.FC<Omit<SlateRenderElementProps, 'children'>>;
      }
    >;
    /** Map html element to list style type. */
    getListStyleType?: (element: HTMLElement) => ListStyleType;
  }
>;

export const BaseIndentListPlugin = createTSlatePlugin<BaseIndentListConfig>({
  key: 'listStyleType',
  inject: {
    plugins: {
      [HtmlPlugin.key]: {
        parser: {
          transformData: ({ data }) => {
            const document = new DOMParser().parseFromString(data, 'text/html');
            const { body } = document;

            traverseHtmlElements(body, (element) => {
              if (element.tagName === 'LI') {
                const { childNodes } = element;

                // replace li block children (e.g. p) by their children
                const liChildren: Node[] = [];
                childNodes.forEach((child) => {
                  if (isHtmlBlockElement(child as Element)) {
                    liChildren.push(...child.childNodes);
                  } else {
                    liChildren.push(child);
                  }
                });

                element.replaceChildren(...liChildren);

                // TODO: recursive check on ul parents for indent

                return false;
              }

              return true;
            });

            return postCleanHtml(body.innerHTML);
          },
        },
      },
    },
  },
  options: {
    getListStyleType: (element) => element.style.listStyleType as ListStyleType,
  },
  parsers: {
    html: {
      deserializer: {
        isElement: true,
        rules: [
          {
            validNodeName: 'LI',
          },
        ],
        parse: ({ editor, element, getOptions }) => {
          return {
            // gdoc uses aria-level attribute
            indent: Number(element.getAttribute('aria-level')),
            listStyleType: getOptions().getListStyleType?.(element),
            type: editor.getType(BaseParagraphPlugin),
          };
        },
      },
    },
  },
  render: {
    belowNodes: renderIndentListBelowNodes,
  },
}).overrideEditor(withIndentList);
