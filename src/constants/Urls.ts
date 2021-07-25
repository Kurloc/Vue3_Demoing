export const Urls = {
    frontEnd: {
        About: "/about",
        Demos: {
            CSharpApiDemo: "/api-demo",
            NotificationsDemo: "/notifications-demo",
        },
        Home: "/",
    },
    backEnd: {
        CSharpTestApi: process.env.VUE_APP_BACK_END_URL + "VueTestData/get-data"
    }
}
