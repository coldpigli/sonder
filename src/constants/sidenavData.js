import {MdHome, MdTrendingUp, MdGroupAdd, MdBookmark, MdPerson} from "react-icons/md";

export const sidenavData = [
    {
        id: 1,
        title: "feed",
        path: '/feed',
        icon: MdHome
    },
    {
        id: 2,
        title: "trending",
        path: '/trending',
        icon: MdTrendingUp
    },
    {
        id: 3,
        title: "peers",
        path: '/peers',
        icon: MdGroupAdd
    },
    {
        id: 4,
        title: "bookmarks",
        path: '/bookmarks',
        icon: MdBookmark
    },
    {
        id: 5,
        title: "profile",
        path: '/profile',
        icon: MdPerson
    },
]