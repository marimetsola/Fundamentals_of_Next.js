test("fetches posts without calling real API", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Mock post 1" },
          { id: 2, title: "Mock post 2" },
        ]),
    })
  );

  const res = await fetch("/api/blogs");
  const data = await res.json();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(data.length).toBe(2);
  expect(data[0].title).toBe("Mock post 1");
});
