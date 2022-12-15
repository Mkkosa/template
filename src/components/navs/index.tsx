import { faHome, faCarCrash, faCableCar, faCake, faEarDeaf } from "@fortawesome/free-solid-svg-icons"

export const content = [
    {
        href: '/home',
        title: 'Active',
        icon: faHome
    },
    {
        title: 'collapse1',
        icon: faCarCrash,
        items: [
            {
                href: '/collapse1/col1',
                title: 'Col1',
                icon: faCableCar
            },
            {
                href: '/collapse1/col2',
                title: 'Col2',
                icon: faCake
            }
        ]
    },
    {
        title: 'collapse2',
        icon: faEarDeaf,
        items: [
            {
                href: '/collapse2/col2',
                title: 'Col21',
                icon: faCake
            },
            {
                href: '/collapse2/col2',
                title: 'Col22',
                icon: faEarDeaf
            }
        ]
    }
]