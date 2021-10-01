const buffer = Buffer.from("Hello world!");

// eslint-disable-next-line no-restricted-syntax
for (const char of buffer.values()) {
  console.log({ char });
}

// eslint-disable-next-line no-restricted-syntax
for (const [index, code] of buffer.entries()) {
  const char = String.fromCharCode(code);
  console.log({ index, code, char });
}
