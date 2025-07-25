import { toPlatePlugin } from 'platejs/react';

import { type BaseListConfig, BaseListPlugin } from '../lib';

export type ListConfig = BaseListConfig;

/** Enables support for indented lists with React-specific features. */
export const ListPlugin = toPlatePlugin(BaseListPlugin);
