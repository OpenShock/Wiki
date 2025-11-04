export default [
    {
        text: 'Home',
        items: [
            { text: 'Home', link: '/' },
            { text: 'FAQ', link: '/home/faq' },
            { text: 'Safety', link: '/home/safety-rules' },
        ],
    },
    {
        text: 'Guides',
        items: [
            { text: 'Quickstart', link: '/guides/quickstart/what-you-need' },
            { text: 'OpenShock', link: '/guides/openshock/' },
            { text: 'Do It Yourself', link: '/guides/diy/' },
            {
                text: 'Developer',
                items: [
                    { text: 'Overview', link: '/dev/' },
                    { text: 'Contributing', link: '/dev/contributing/' },
                ],
            },
            {
                text: 'ShockOsc',
                items: [
                    { text: 'Basic', link: '/guides/shockosc/basic' },
                    { text: 'Avatar setup VRC', link: '/guides/shockosc/avatar-setup-vrc' },
                    { text: 'Avatar setup CVR', link: '/guides/shockosc/avatar-setup-cvr' },
                    { text: 'Parameters', link: '/guides/shockosc/parameters' },
                ],
            },
            { text: 'Self Hosting', link: '/guides/selfhosting/' },
        ],
    },
    {
        text: 'Hardware',
        link: '/hardware'
    },
    {
        text: 'Vendors',
        link: '/vendors/hardware'
    },
    {
        text: 'Troubleshooting',
        items: [
            { text: 'Hub', link: '/troubleshooting/hub' },
            { text: 'ShockOsc', link: '/troubleshooting/shockosc' },
            { text: 'Shocker pairing', link: '/troubleshooting/shocker-pairing' },
        ],
    },
    {
        text: 'Legal',
        items: [
            { text: 'Terms and Conditions', link: '/legal/terms-and-conditions' },
            { text: 'Privacy Policy', link: '/legal/privacy-policy' },
            { text: 'Code of Conduct', link: '/legal/code-of-conduct' },
            { text: 'License', link: '/legal/license' },
        ],
    },
];