import { WithOptional } from "./types";

export default function <TIn, TOut, TPartial extends Partial<TIn>>(
  fn: (arg: TIn) => TOut,
  defaults: TPartial
): (arg: WithOptional<TIn, keyof TPartial>) => TOut {
  return (arg) => fn({ ...defaults, ...arg } as any);
}
