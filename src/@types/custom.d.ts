export {};

declare global {
  namespace Express {
    interface Response {
      handleError: Function;
    }
  }
}
