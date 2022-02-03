//  response model for qurying for specifics
export default class ResponseModelQueryDto<TDto> {
    count: number;
    list: TDto;
}