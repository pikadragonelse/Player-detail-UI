export interface ResponseAPI<T> {
    code: number;
    data: T;
    message: string;
}
