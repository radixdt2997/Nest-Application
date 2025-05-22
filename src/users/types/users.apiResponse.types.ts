type SignupAPIResponse = {
  id: number;
  email: string;
};

interface LoginUserPayloadResponse extends SignupAPIResponse {
  role: string;
  iat: number;
  exp: number;
}

export { LoginUserPayloadResponse, SignupAPIResponse };
