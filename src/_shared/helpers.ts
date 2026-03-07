import type { ObjectEntries } from './helpers.types';

export function objectEntries<T extends Record<string, unknown>>(obj: T): ObjectEntries<T> {
  return Object.entries(obj) as ObjectEntries<T>;
}