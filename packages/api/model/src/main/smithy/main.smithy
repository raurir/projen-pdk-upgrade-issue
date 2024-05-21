$version: "2"
namespace com.test

use aws.protocols#restJson1

/// A sample smithy api
@restJson1
service TEestService {
    version: "1.0"
    operations: [SayHello]
    errors: [
      BadRequestError
      NotAuthorizedError
      InternalFailureError
    ]
}