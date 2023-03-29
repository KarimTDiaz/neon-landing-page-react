import { v4 } from "uuid"

export const COLORS = {
    bgColor: 'rgb(17 24 39)',
    titleColor: 'rgb(243 244 246)',
    textColor: 'rgb(156 163 175)',
    primaryColor: '#2563eb',
    primaryColorSoft: '#60a5fa',
    secondaryColor: '#1f2937',
    secondaryColorSoft: '#374151',
    decoColor: '#a855f7'
}

export const FONT_SIZE = {
    xxxs: '0.75rem',
    xxs: '0.875rem',
    xs: '1rem',
    s: '1.125rem',
    m: '1.25rem',
    l: '1.5rem',
    xl: '1.875rem',
    xxl: '2.25rem',
    xxlDsktp: '3rem',
    xxxl: '3.75rem',
    xxxxl: '5rem'
}

export const FONT_WEIGHT = {
    xxs: '100',
    xs: '300',
    s: '400',
    m: '500',
    l: '600',
    xl: '700',
    xxl: '800',
    xxxl: '900'
}

export const SECTION_TITLES = {
    focus: 'Focus on solving bigger problems',
    features: 'Use sensitive data without sacrificing privacy',
    standarized: 'Standardized dev environments',
    plans: 'Find a plan thats right for you',
    clients: 'Sound too good ? Hear what our customers have to say',
    resources: 'Resources to help you get the most out of Neon',
    started: 'Get started with Neon'
}

export const SECTION_TEXTS = {
    features: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
    standarized: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    plans: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
    started: 'It only takes a few minutes to get started with Neon. Understand your users, start free, today.'

}

export const SOCIALS = [
    {
        url: '/images/facebook.svg',
        id: v4()
    },
    {
        url: '/images/tinder.svg',
        id: v4()
    },
    {
        url: '/images/airbnb.svg',
        id: v4()
    },
    {
        url: '/images/hubspot.svg',
        id: v4()
    },
    {
        url: '/images/amazon.svg',
        id: v4()
    }
]

export const FOCUS = [
    {
        url: '/images/icon-square.svg',
        title: 'Ready for the future',
        text: 'A flexible foundation that evolves with complex ecosystem.',
        id: v4()
    },
    {
        url: '/images/icon-brackets.svg',
        title: 'Ready for the future',
        text: 'A flexible foundation that evolves with complex ecosystem.',
        id: v4()
    },
    {
        url: '/images/icon-check-list.svg',
        title: 'Ready for the future',
        text: 'A flexible foundation that evolves with complex ecosystem.',
        id: v4()
    }
]

export const PLANS = [
    {
        title: 'Starter',
        amount: 49,
        text: 'For teams building apps for many public & private users.',
        checkTitle: 'Features include:',
        checkItems: [
            {
                id: v4(),
                text: 'Unlimited placeholder texts',

            },
            {
                text: 'Consectetur adipiscing elit',
                id: v4()
            },
            {
                text: 'Excepteur sint occaecat cupidatat',
                id: v4()
            },
            {
                text: 'Officia deserunt mollit anim',
                id: v4()
            }
        ],
        id: v4()
    },
    {
        title: 'Business',
        amount: 79,
        text: 'For teams building apps for many public & private users.',
        checkTitle: 'Everything in Starter, plus:',
        checkItems: [
            {
                text: 'Consectetur adipiscing elit',
                id: v4()
            },
            {
                text: 'Consectetur adipiscing elit',
                id: v4()
            },
            {
                text: 'Excepteur sint occaecat cupidatat',
                id: v4()
            },
            {
                text: 'Officia deserunt mollit anim',
                id: v4()
            },
            {
                text: 'Excepteur sint occaecat cupidatat',
                id: v4()
            },
            {
                text: 'Officia deserunt mollit anim',
                id: v4()
            },
        ],
        id: v4()
    },
    {
        title: 'Enterprise',
        amount: 129,
        text: 'For teams building apps for many public & private users.',
        checkTitle: 'Everything in Business, plus:',
        checkItems: [
            {
                text: 'Unlimited placeholder texts',
                id: v4()
            },
            {
                text: 'Consectetur adipiscing elit',
                id: v4()
            },
            {
                text: 'Excepteur sint occaecat cupidatat',
                id: v4()
            },
            {
                text: 'Officia deserunt mollit anim',
                id: v4()
            }
        ],
        id: v4()
    }
]

export const CLIENTS = [
    {
        url: '/images/testimonial-01.jpg',
        text: 'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
        user: 'Mark Luiss - ',
        company: 'Apprenda',
        id: v4()
    },
    {
        url: '/images/testimonial-02.jpg',
        text: 'Neon has made a huge impact on compliance, while helping us become more transparent.',
        user: 'Patrick Mills - ',
        company: 'AppDonkey',
        id: v4()
    },
    {
        url: '/images/testimonial-03.jpg',
        text: 'GitHub provides tools that are, in a sense, invisible. You don’t have to waste time trying to get them to work.',
        user: 'David Collison - ',
        company: 'BrainTwo',
        id: v4()
    },
    {
        url: '/images/testimonial-04.jpg',
        text: 'Neon is the tool devs. The more you can make work feel native for a developer, the more cool their experience.',
        user: 'Licia McFarland - ',
        company: 'Paytable',
        id: v4()
    },
    {
        url: '/images/testimonial-05.jpg',
        text: 'Neon comes into play during the entire software life cycle. It’s the de facto tool for anything related to our software.',
        user: 'Rossana Alecu - ',
        company: 'Bolt Money',
        id: v4()
    },
    {
        url: '/images/testimonial-06.jpg',
        text: 'I have no tech skills and with Neon I can actually make good looking apps with ease.',
        user: 'Max Corsano - ',
        company: 'MixTech',
        id: v4()
    },
    {
        url: '/images/testimonial-07.jpg',
        text: 'It s not just easier to get in touch with developers, it s also easier to bring in other team members.',
        user: 'Anna Pratt - ',
        company: 'Cloud Inc',
        id: v4()
    },
    {
        url: '/images/testimonial-08.jpg',
        text: 'Tools like Neon Advanced Security help keep our team lean. It makes us much more efficient.',
        user: 'Veerle Larson - ',
        company: 'Prinso',
        id: v4()
    },
    {
        url: '/images/testimonial-09.jpg',
        text: 'Neon enables speed and scale. We can work on bigger projects and finish them faster.',
        user: 'Ana Kennedy - ',
        company: 'Syntax Inc',
        id: v4()
    }
]

export const FEATURES_CHECKLIST = [
    {
        text: 'Performance reviews',
        id: v4()
    },
    {
        text: 'Objectives and goal setting',
        id: v4()
    },
    {
        text: 'Manager check-ins',
        id: v4()
    }
]



export const TABS_INFO = [
    {
        tab: 'For Developers',
        id: v4(),
        cardInfo: [
            {
                url: '/images/icons-tabs/angular.svg',
                resource: 'Neon Angular',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/js.svg',
                resource: 'Neon JS',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/node.svg',
                resource: 'Neon Node',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/react.svg',
                resource: 'Neon React',
                id: v4(),
            }
        ]
    },
    {
        tab: 'For Designers',
        id: v4(),
        cardInfo: [
            {
                url: '/images/icons-tabs/docker.svg',
                resource: 'Neon Docker',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/html5.svg',
                resource: 'Neon Html5',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/medium.svg',
                resource: 'Neon Medium',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/github.svg',
                resource: 'Neon Github',
                id: v4(),
            }
        ]
    },
    {
        tab: 'For Founders',
        id: v4(),
        cardInfo: [
            {
                url: '/images/icons-tabs/telegram.svg',
                resource: 'Neon Telegram',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/youtube.svg',
                resource: 'Neon Youtube',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/github.svg',
                resource: 'Neon Github',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/docs.svg',
                resource: 'Neon Docs',
                id: v4(),
            }
        ]
    },
    {
        tab: 'For Marketers',
        id: v4(),
        cardInfo: [
            {
                url: '/images/icons-tabs/spotify.svg',
                resource: 'Neon Spotify',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/twitter.svg',
                resource: 'Neon Twitter',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/docs.svg',
                resource: 'Neon Docs',
                id: v4(),
            },
            {
                url: '/images/icons-tabs/github.svg',
                resource: 'Neon Github',
                id: v4(),
            }
        ]
    }

]