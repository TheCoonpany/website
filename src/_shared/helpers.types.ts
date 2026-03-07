export type ObjectEntries<T> = readonly {
  [K in keyof T]: [K, T[K]];
}[keyof T][];