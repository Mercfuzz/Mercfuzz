export interface OptionObjects {
  MECANICA: OptionObject,
  EXP: OptionObject,
  POOL: OptionObject,
  MIDIA: OptionObject,
  SIDEBAR: OptionObject,
  MINIMIZE: OptionObject,
}

export interface OptionObject {
  id: number | undefined,
  title?: string | undefined,
  textContent?:  Array<string> | string | undefined,
  imageSrc?: Array<string> | undefined,
  anchor?: Array<string> | undefined,
  class?: string | Array<string> | undefined,
}