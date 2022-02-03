export default class ResponseDto {
    statusCode: number;
    status: 'SUCCESS' | 'FAILED';
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    message?: string | null;
    data?: any;
    socketId?: string = null;
    requestId?: string = null;

    constructor(
        statusCode: number,
        status: 'SUCCESS' | 'FAILED',
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        message: string | null = null,
        data: any = null
    ) {
        this.statusCode = statusCode;
        this.status = status;
        this.method = method;
        this.message = message;
        this.data = data;
    }
}