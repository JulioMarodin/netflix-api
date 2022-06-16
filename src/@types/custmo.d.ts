export {};

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Response {
      // eslint-disable-next-line @typescript-eslint/ban-types
      handleError: Function;
    }
  }
}
