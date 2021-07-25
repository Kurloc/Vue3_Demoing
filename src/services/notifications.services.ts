import {ref} from "vue";
import {HttpService} from "@/services/HttpService";

export interface AlertMessage {
    id: string;
    timeStamp: Date;
    message: string;
    lifespanMs: number;
    expired: boolean;
    alertType: 'Success' | 'Error'
}

export class NotificationsService {
    public static messages = ref([]);
    public static s: string = 'Notifications String';
    public static showNotifications = ref(false);
    public static alertTypes = ['Success', 'Error'];

    constructor() {
        if (process.env.VUE_APP_DEBUGGING && NotificationsService.messages.value.length === 0) {
            NotificationsService.DebugMessages();
        }
    }



    static Uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    static AddMessages(alertMessages: AlertMessage[]): void {
        NotificationsService.showNotifications.value = true;
        for (const alertMessage of alertMessages) {
            // @ts-ignore
            NotificationsService.messages.value.push(alertMessage);
            NotificationsService.RemoveMessage(alertMessage);
        }
    }

    static RemoveMessage(alertMessage: AlertMessage, removeImmediately: boolean = false): void {
        let lifespan = alertMessage.lifespanMs;
        if (removeImmediately)
            lifespan = 0;

        setTimeout(() => {
            alertMessage.expired = true;
            setTimeout(() => {
                const i = NotificationsService.messages.value.filter(i => (i as AlertMessage).id != alertMessage.id);
                NotificationsService.messages.value = [];

                for (const alertMessage of i) {
                    NotificationsService.messages.value.push(alertMessage);
                }

                if (NotificationsService.messages.value.length === 0)
                    NotificationsService.showNotifications.value = false;
            }, 200);
        }, lifespan);
    }

    static ClearMessages(): void {
        let c = 0;
        for (const i of NotificationsService.messages.value) {
            setTimeout(() => {
                NotificationsService.RemoveMessage(i, true);
            }, c * 100)
            c++;
        }
    }

    static GetMessages() {
        return NotificationsService.messages;
    }



    GetMessages() {
        return NotificationsService.messages;
    }



    private static DebugMessages() {
        NotificationsService.AddMessages([
            {
                id: NotificationsService.Uuidv4(),
                alertType: "Success",
                message: "test success message",
                lifespanMs: 3000,
                expired: false,
                timeStamp: new Date(Date.now())
            } as AlertMessage,
            {
                id: NotificationsService.Uuidv4(),
                alertType: "Error",
                message: "test error message",
                lifespanMs: 12500,
                expired: false,
                timeStamp: new Date(Date.now())
            } as AlertMessage
        ]);
    }
}

export default NotificationsService;
