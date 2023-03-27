import { v4 } from "uuid"

export const COLORS = {
    bgColor: 'rgb(17 24 39)',
    titleColor: 'rgb(243 244 246)',
    textColor: 'rgb(156 163 175)',
    primaryColor: '#2563eb',
    primaryColorSoft: '#60a5fa',
    secondaryColor: '#1f2937',
    secondaryColorSoft: '#374151'
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
        url: './public/images/facebook.svg',
        id: v4()
    },
    {
        url: './public/images/tinder.svg',
        id: v4()
    },
    {
        url: './public/images/airbnb.svg',
        id: v4()
    },
    {
        url: './public/images/hubspot.svg',
        id: v4()
    },
    {
        url: './public/images/amazon.svg',
        id: v4()
    }
]

export const FOCUS = [
    {
        url: './public/images/icon-square.svg',
        title: 'Ready for the future',
        text: 'A flexible foundation that evolves with complex ecosystem.',
        id: v4()
    },
    {
        url: './public/images/icon-brackets.svg',
        title: 'Ready for the future',
        text: 'A flexible foundation that evolves with complex ecosystem.',
        id: v4()
    },
    {
        url: './public/images/icon-check-list.svg',
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
        id: v4()
    },
    {
        title: 'Business',
        amount: 79,
        text: 'For teams building apps for many public & private users.',
        checkTitle: 'Everything in Starter, plus:',
        id: v4()
    },
    {
        title: 'Enterprise',
        amount: 129,
        text: 'For teams building apps for many public & private users.',
        checkTitle: 'Everything in Business, plus:',
        id: v4()
    }
]

export const CLIENTS = [
    {
        url: './public/images/testimonial-01.jpg',
        text: 'Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.',
        user: 'Mark Luiss - ',
        company: 'Apprenda',
        id: v4()
    },
    {
        url: './public/images/testimonial-02.jpg',
        text: 'Neon has made a huge impact on compliance, while helping us become more transparent.',
        user: 'Patrick Mills - ',
        company: 'AppDonkey',
        id: v4()
    },
    {
        url: './public/images/testimonial-03.jpg',
        text: 'GitHub provides tools that are, in a sense, invisible. You don’t have to waste time trying to get them to work.',
        user: 'David Collison - ',
        company: 'BrainTwo',
        id: v4()
    },
    {
        url: './public/images/testimonial-04.jpg',
        text: 'Neon is the tool devs. The more you can make work feel native for a developer, the more cool their experience.',
        user: 'Licia McFarland - ',
        company: 'Paytable',
        id: v4()
    },
    {
        url: './public/images/testimonial-05.jpg',
        text: 'Neon comes into play during the entire software life cycle. It’s the de facto tool for anything related to our software.',
        user: 'Rossana Alecu - ',
        company: 'Bolt Money',
        id: v4()
    },
    {
        url: './public/images/testimonial-06.jpg',
        text: 'I have no tech skills and with Neon I can actually make good looking apps with ease.',
        user: 'Max Corsano - ',
        company: 'MixTech',
        id: v4()
    },
    {
        url: './public/images/testimonial-07.jpg',
        text: 'It s not just easier to get in touch with developers, it s also easier to bring in other team members.',
        user: 'Anna Pratt - ',
        company: 'Cloud Inc',
        id: v4()
    },
    {
        url: './public/images/testimonial-08.jpg',
        text: 'Tools like Neon Advanced Security help keep our team lean. It makes us much more efficient.',
        user: 'Veerle Larson - ',
        company: 'Prinso',
        id: v4()
    },
    {
        url: './public/images/testimonial-09.jpg',
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

export const PLANS_CHECKLIST = [
    [
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
    [
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
    [
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
]

export const TABS = ['For Developers', 'For Designers', 'For Founders', 'For Marketers']

export const TABS_INFO = [
    [
        {
            url: './public/images/icons-tabs/angular.svg',
            resource: 'Neon Angular',
        },
        {
            url: './public/images/icons-tabs/js.svg',
            resource: 'Neon JS',
        },
        {
            url: './public/images/icons-tabs/node.svg',
            resource: 'Neon Node',
        },
        {
            url: './public/images/icons-tabs/react.svg',
            resource: 'Neon React',
        }
    ],
    [
        {
            url: './public/images/icons-tabs/docker.svg',
            resource: 'Neon Docker',
        },
        {
            url: './public/images/icons-tabs/html5.svg',
            resource: 'Neon Html5',
        },
        {
            url: './public/images/icons-tabs/Medium.svg',
            resource: 'Neon Medium',
        },
        {
            url: './public/images/icons-tabs/github.svg',
            resource: 'Neon Github',
        }
    ],
    [
        {
            url: './public/images/icons-tabs/telegram.svg',
            resource: 'Neon Telegram',
        },
        {
            url: './public/images/icons-tabs/youtube.svg',
            resource: 'Neon Youtube',
        },
        {
            url: './public/images/icons-tabs/github.svg',
            resource: 'Neon Github',
        },
        {
            url: './public/images/icons-tabs/docs.svg',
            resource: 'Neon Docs',
        }
    ],
    [
        {
            url: './public/images/icons-tabs/spotify.svg',
            resource: 'Neon Spotify',
        },
        {
            url: './public/images/icons-tabs/Twitter.svg',
            resource: 'Neon Twitter',
        },
        {
            url: './public/images/icons-tabs/docs.svg',
            resource: 'Neon Docs',
        },
        {
            url: './public/images/icons-tabs/github.svg',
            resource: 'Neon Github',
        }
    ]



]