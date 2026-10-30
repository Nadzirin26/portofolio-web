export function projectRoute(pathname) {
  const match = /^\/projects\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/.exec(pathname);
  return match ? match[1] : null;
}
