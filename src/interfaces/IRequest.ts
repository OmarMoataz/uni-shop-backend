export interface IQuery {
  query?: string;
  category?: string;
}

export interface IRequest {
  query: IQuery;
}
