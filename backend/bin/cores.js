// cors
const cores = async (req ,res, next) => {
    const defaultOptions = {
      allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      origin: '*',
      maxAge: 86400,
      credentials: false,
      allowHeaders: [
        'Content-Type',
        'Authorization',
        'Accept',
        'Referer',
        'User-Agent',
        'x-token',
        'device-token'
      ]
    }
  
    res.set('Access-Control-Allow-Origin', defaultOptions.origin)
  
    if (req.method === 'OPTIONS') {
      // Preflight Request
      if (!ctx.get('Access-Control-Request-Method')) {
        await next()
        return
      }
  
      // Access-Control-Max-Age
      if (defaultOptions.maxAge) {
        res.set('Access-Control-Max-Age', String(defaultOptions.maxAge))
      }
  
      // Access-Control-Allow-Credentials
      if (defaultOptions.credentials === true) {
        // When used as part of a response to a preflight request,
        // this indicates whether or not the actual request can be made using credentials.
        res.set('Access-Control-Allow-Credentials', 'true')
      }
  
      // Access-Control-Allow-Methods
      if (defaultOptions.allowMethods) {
        res.set(
          'Access-Control-Allow-Methods',
          defaultOptions.allowMethods.join(',')
        )
      }
  
      // Access-Control-Allow-Headers
      if (defaultOptions.allowHeaders) {
        res.set(
          'Access-Control-Allow-Headers',
          defaultOptions.allowHeaders.join(',')
        )
      } else {
        res.set(
          'Access-Control-Allow-Headers',
          req.get('Access-Control-Request-Headers')
        )
      }
  
      res.status = 204 // No Content
      return
    }
  
    // Request
    // Access-Control-Allow-Credentials
    if (defaultOptions.credentials === true) {
      // eslint-disable-next-line no-undef
      if (origin === '*') {
        // `credentials` can't be true when the `origin` is set to `*`
        req.remove('Access-Control-Allow-Credentials')
      } else {
        res.set('Access-Control-Allow-Credentials', 'true')
      }
    }
  
    // Access-Control-Expose-Headers
    if (defaultOptions.exposeHeaders) {
      res.set(
        'Access-Control-Expose-Headers',
        defaultOptions.exposeHeaders.join(',')
      )
    }
  
    await next()
  }
  
  module.exports = () => cores
  