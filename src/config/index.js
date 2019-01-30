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
            routeName: 'home',
        },
        {
            title: 'nested Route',
            iconName: 'boxes',
            routeName: 'currentRequests',
            children: [
                {
                    title: 'Messaging',
                    iconName: 'comment',
                    routeName: 'messaging',
                },
            ],
        },
    ],
    googleMapApiKey: 'AIzaSyBNAPLVcqs6_wajjZSULUC7Z1sA9-fdcvU',
    supportedImageTypes: ['image/png', 'image/jpeg', 'image/jpg'],
};
