import {HttpService} from "@/services/HttpService";
import {Urls} from "@/constants/Urls";
import NotificationsService, {AlertMessage} from "@/services/notifications.services";
// @ts-ignore
import {AxiosError} from "axios";

export interface TestData {
    Value: string;
    randomInteger: number;
    timeStamp: Date;
}


export class TestCSharpApiService extends HttpService {
    constructor() {
        super();
    }

    GetTestData() {
        super.Get(Urls.backEnd.CSharpTestApi)
        .then(
            (response) => {
                const resp: TestData[] = response.data;
                console.log(response);
                NotificationsService.AddMessages([
                {
                    id: NotificationsService.Uuidv4(),
                    alertType: 'Success',
                    lifespanMs: 5000,
                    message: `Added ${resp.length}`,
                    timeStamp: new Date(Date.now())
                } as AlertMessage])
            }
        )
        .catch((error: AxiosError) => {
            console.log(error.message);
            NotificationsService.AddMessages([{
                id: NotificationsService.Uuidv4(),
                alertType: 'Error',
                lifespanMs: 5000,
                message: error.message + ' - Csharp Api Data',
                timeStamp: new Date(Date.now())
            } as AlertMessage])
        });
    }
}


export default TestCSharpApiService;
