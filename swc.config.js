module.exports = {
  jsc: {
    parser: {
      syntax: "typescript",
      decorators: true,
    },
    target: "es2022",
    transform: {
      decoratorMetadata: true,
    },
  },
};
