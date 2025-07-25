import type { Page } from '@playwright/test';
import type { EditorSelection } from 'platejs';

import type { EditorHandle } from './types';

export const getSelection = async (
  page: Page,
  editorHandle: EditorHandle
): Promise<EditorSelection> =>
  page.evaluate((editor) => editor.selection, editorHandle);
