 import { authUser } from '@/utils/AuthHelper'
// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/p-user/',
}
 
export function middleware(request) {
  // Call our authentication function to check the request
  if (!authUser(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 }
    )
  }
}