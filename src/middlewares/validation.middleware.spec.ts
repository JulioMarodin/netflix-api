import { CustomRequest, CustomResponse } from "../interfaces";
import CreateEpisodeSchema from "../schemas/create-episode.schema";
import CreateShowSchema from "../schemas/create-show.schema";
import CreateUserSchema from "../schemas/create-user.schema";
import LoginSchema from "../schemas/login.schema";
import validationMiddleware from "./validation.middleware";

describe("Test validation middleware with login schema", () => {
  it("Should call next function", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { email: "test@mail.com", password: "churros" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(LoginSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalled();
  });

  it("Should return error if missing field", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { password: "churros" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(LoginSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });

  it("Should return error if wrong field sent", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { test: "churros", x: "y" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(LoginSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });
});

describe("Test validation middleware with create user schema", () => {
  it("Should call next function", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { email: "test@mail.com", password: "churros" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateUserSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalled();
  });

  it("Should return error if missing field", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { password: "churros" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(LoginSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });

  it("Should return error if wrong field sent", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { test: "churros", x: "y" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(LoginSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });
});

describe("Test validation middleware with create show schema", () => {
  it("Should call next function", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: {
        title: "Miranha",
        director: "Narutinho",
        actors: "Relampago Marquinhos",
        description: "Filme do Miranha",
        cover: "image link",
        category: "MOVIE",
      },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateShowSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalled();
  });

  it("Should return error if missing field", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: {
        title: "Miranha",
        director: "Narutinho",
        actors: "Relampago Marquinhos",
        description: "Filme do Miranha",
        category: "MOVIE",
      },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateShowSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });

  it("Should return error if wrong field sent", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { test: "churros", x: "y" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateShowSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });

  it("Should return error if wrong category not MOVIE or TV_SHOW", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: {
        title: "Miranha",
        director: "Narutinho",
        actors: "Relampago Marquinhos",
        description: "Filme do Miranha",
        cover: "image link",
        category: "show",
      },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateShowSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });
});

describe("Test validation middleware with create episode schema", () => {
  it("Should call next function", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: {
        title: "Miranha",
        description: "Episodio da serie do Miranha",
        cover: "image link",
        duration: 30,
        showId: 3,
      },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateEpisodeSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalled();
  });

  it("Should return error if missing field", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: {
        title: "Miranha",
        description: "Episodio da serie do Miranha",
        cover: "image link",
        showId: 3,
      },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateEpisodeSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });

  it("Should return error if wrong field sent", async () => {
    const nextFn = jest.fn();
    const mockReq = {
      body: { test: "churros", x: "y" },
    } as CustomRequest;
    const mockRes = {} as CustomResponse;
    await validationMiddleware(CreateEpisodeSchema)(mockReq, mockRes, nextFn);
    expect(nextFn).toBeCalledTimes(0);
  });
});
