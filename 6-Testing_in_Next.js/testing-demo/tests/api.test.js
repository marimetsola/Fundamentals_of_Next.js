import { getHelloMessage } from "../app/api/hello/logic";

test("returns hello message", () => {
  expect(getHelloMessage()).toEqual({ message: "Hello from API" });
});
