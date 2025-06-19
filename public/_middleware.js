export default function middleware(request) {
  const { pathname } = new URL(request.url)

  if (
    !pathname.startsWith('/api') &&
    !pathname.includes('.') &&
    pathname !== '/'
  ) {
    return Response.redirect(new URL('/', request.url))
  }
}
