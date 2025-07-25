import type { ParseConfig } from 'papaparse';
import type { OmitFirst, PluginConfig } from 'platejs';

import { bindFirst, createTSlatePlugin, KEYS } from 'platejs';

import { deserializeCsv } from './deserializer/utils';

export type CsvConfig = PluginConfig<
  'csv',
  {
    /**
     * Percentage in decimal form, from 0 to a very large number, 0 for no
     * errors allowed, Percentage based on number of errors compared to number
     * of rows
     *
     * @default 0.25
     */
    errorTolerance?: number;
    /**
     * Options to pass to papaparse
     *
     * @default { header: true }
     * @see https://www.papaparse.com/docs#config
     */
    parseOptions?: CsvParseOptions;
  },
  {
    csv: {
      deserialize: OmitFirst<typeof deserializeCsv>;
    };
  }
>;

export type CsvParseOptions = ParseConfig;

/** Enables support for deserializing content from CSV format to Slate format. */
export const CsvPlugin = createTSlatePlugin<CsvConfig>({
  key: KEYS.csv,
  options: {
    errorTolerance: 0.25,
    parseOptions: {
      header: true,
    },
  },
})
  .extendApi(({ editor }) => ({
    deserialize: bindFirst(deserializeCsv, editor),
  }))
  .extend(({ api }) => ({
    parser: {
      format: 'text/plain',
      deserialize: ({ data }) => api.csv.deserialize({ data }),
    },
  }));
