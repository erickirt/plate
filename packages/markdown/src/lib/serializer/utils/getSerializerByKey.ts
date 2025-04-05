import type { SerializeMdOptions } from '../serializeMd';

import { defaultRules } from '../../rules';

export const getSerializerByKey = (
  key: string,
  options: SerializeMdOptions
) => {
  const nodes = options.nodes;

  return nodes?.[key]?.serialize === undefined
    ? defaultRules[key]?.serialize
    : nodes?.[key]?.serialize;
};
