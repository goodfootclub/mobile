export interface ApiResponse<T> {
    success: boolean;
    code: number;
    data: T;
    msg?: string;
    errors?: any;
}

export interface UserLoginResponse {
    token: string;
}
