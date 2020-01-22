import { InputError } from "./validation/InputValidator";

export interface ErrorResponse {
  status: string;
  code: string;
  message: string;
}

export interface RequestError {
  [key: string]: InputError;
  request: InputError;
}