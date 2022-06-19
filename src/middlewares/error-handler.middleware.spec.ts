import errorHandlerMiddleware from "./error-handler.middleware";

describe("Error handler middleware", () => {
  it("Should call next function", () => {
    const next = jest.fn();

    jest.mock("node-fetch");
    const { Response, Request } = jest.requireActual("node-fetch");
    errorHandlerMiddleware(Request, Response, next);

    expect(next).toBeCalled();
  });
});
