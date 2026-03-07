import type { ObjectEntries } from './helpers.types';

export function objectEntries<T extends Record<string, unknown>>(obj: T): ObjectEntries<T> {
  return Object.entries(obj) as ObjectEntries<T>;
}

export function objectKeys<T extends Record<string, unknown>>(obj: T): readonly (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
} 