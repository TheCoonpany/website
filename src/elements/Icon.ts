export const ICON = [
  'github',
  'linkedin',
  'mail',
  'education',
  'consultancy',
  'clip',
  'terminal',
  'youtube',
  'label',
] as const satisfies string[];

export type Icon_Name = typeof ICON[number];