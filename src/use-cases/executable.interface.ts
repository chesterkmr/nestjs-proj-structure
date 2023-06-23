export interface Executable<TResult = any> {
  execute(...args: any): TResult;
}
