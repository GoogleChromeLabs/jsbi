export function assertEqual(a, b, message) {
  if (a !== b) throw new Error(message);
}

export function assertTrue(x, message) {
  if (!x) throw new Error(message);
}
