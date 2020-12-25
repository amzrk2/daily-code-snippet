function match(s, pattern) {
  if (typeof s !== 'string' || typeof pattern !== 'string') {
    return false;
  }
  if (!s.length && !pattern.length) {
    return true;
  }
  return Boolean(new RegExp(`^${pattern}$`).exec(s));
}
