if (!global.users) {
  global.users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];
}

export const users = global.users;
