export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  if (url.pathname === '/' || url.pathname === '') {
    const appRequest = new Request(url.origin + '/app', request);
    return fetch(appRequest);
  }
  
  return context.env.ASSETS.fetch(request);
}
