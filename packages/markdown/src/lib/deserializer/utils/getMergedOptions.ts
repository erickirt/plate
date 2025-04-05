import type { SlateEditor } from '@udecode/plate';

import type { DeserializeMdOptions } from '../deserializeMd';

import { MarkdownPlugin } from '../../MarkdownPlugin';
import { defaultRules } from '../../rules';

/**
 * Merges Markdown configurations, following the principle that options take
 * precedence
 *
 * @param editor Editor instance used to get plugin default configurations
 * @param options User-provided options (higher priority)
 * @returns The final merged configuration
 */
export const getMergedOptionsDeserialize = (
  editor: SlateEditor,
  options?: DeserializeMdOptions
): DeserializeMdOptions => {
  const {
    allowedNodes: PluginAllowedNodes,
    allowNode: PluginAllowNode,
    disallowedNodes: PluginDisallowedNodes,
    remarkPlugins: PluginRemarkPlugins,
    rules: PluginNodes,
  } = editor.getOptions(MarkdownPlugin);

  const mergedNodes = Object.assign({}, defaultRules, PluginNodes);

  return {
    allowedNodes: options?.allowedNodes ?? PluginAllowedNodes,
    allowNode: options?.allowNode ?? PluginAllowNode,
    disallowedNodes: options?.disallowedNodes ?? PluginDisallowedNodes,
    editor,
    memoize: options?.memoize,
    nodes: mergedNodes,
    parser: options?.parser,
    remarkPlugins: options?.remarkPlugins ?? PluginRemarkPlugins ?? [],
    splitLineBreaks: options?.splitLineBreaks,
  };
};
