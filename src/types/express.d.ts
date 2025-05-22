import 'express';
import type { LoginUserPayloadResponse } from 'src/users/types';

declare module 'express' {
  interface Request {
    user?: LoginUserPayloadResponse;
  }
}
