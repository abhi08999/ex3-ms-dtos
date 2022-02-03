import FilterDto from './filter.dto'


// Query for specifics
export default class RequestModelQuery {
    requestGuid: string;
    children: string[] = [];
    filter: FilterDto = new FilterDto;
}