export default {
    industries: [
        'Accounting',
        'Animation',
        'Apparel & Fashion',
        'Architecture & Planning',
        'Banking',
        'Computer & Network Security',
        'Computer Software',
        'Entertainment',
        'Human resources',
        'Information Services',
        'Information Technology & Services',
        'Insurance',
        'Leisure & Travel',
        'Marketing & Advertising',
        'Telecommunications',
    ],
    reCaptchaKey: '6Le8soQUAAAAACSRt0-OkQTgdM-wyqmM_diqkSVl',
    asideMenu: [
        {
            title: 'App name',
            iconName: 'audio-description',
            route: {
                name: 'home',
                query: {},
                params: {},
            },
        },
        {
            title: 'nested Route',
            iconName: 'boxes',
            route: {
                name: 'currentRequests',
            },
            children: [
                {
                    title: 'Messaging',
                    iconName: 'comment',
                    route: {
                        name: 'messaging',
                        query: {},
                        params: {},
                    },
                },
            ],
        },
    ],
    googleMapApiKey: 'AIzaSyBNAPLVcqs6_wajjZSULUC7Z1sA9-fdcvU',
    supportedImageTypes: ['image/png', 'image/jpeg', 'image/jpg'],
};
