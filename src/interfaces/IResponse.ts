export interface IResponse<T> {
  json: (data: T) => void;
}
