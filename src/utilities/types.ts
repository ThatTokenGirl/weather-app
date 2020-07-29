export type WithOptional<T, K extends keyof any> = Omit<T, K> &
  Partial<Pick<T, Extract<keyof T, K>>>;
