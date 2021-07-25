import http from "./ApiClient";

export abstract class HttpService {

    protected constructor() {
    }

    protected Get(url: string): Promise<any> {
        return http.get(url);
    }

}
