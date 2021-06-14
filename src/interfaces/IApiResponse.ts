export interface IApiResponse<T = undefined> {
    status: number;
    data: T;
}