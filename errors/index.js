const CustomAPIError = require('./custom-api')
const NotFound = require('./not-found')
const UnauthenticatedError = require('./unauthenticated')
const BadRequestError = require('./bad-request')

module.exports = {
  CustomAPIError,
  NotFound,
  UnauthenticatedError,
  BadRequestError
}
