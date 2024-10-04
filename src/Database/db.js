import { Bug, Radio, ShieldEllipsis, UserRound } from 'lucide-react';

const pageMenus = {
    children:[
        {
            name:'User Profile',
            icon:ShieldEllipsis,
            children:[
                    {
                        name:'Overview',
                    },
                    {
                        name:'Projects'
                    },
                    {
                        name:'Campaigns'
                    },
                    {
                        name:'Documents'
                    },
                    {
                        name:'Followers'
                    }
            ]
        },
        {
            name:'Account',
            icon:ShieldEllipsis,
            children:[
                    {
                        name:'Test'
                    },
            ]
        },
        {
            name:'Corporate',
            icon:ShieldEllipsis,
            children:[]
        },
        {
            name:'Blog',
            icon:ShieldEllipsis,
            children:[]
        },
        {
            name:'Social',
            icon:ShieldEllipsis,
            children:[
                {
                    name:'Test'
                },
            ]
        }
    ]
}

const notification = [
    {
        message:'You have a bug that needs to be fixed.',
        time:'Just now',
        icon:Bug
    },
    {
        message:'New user registered',
        time:'59 minutes ago',
        icon:UserRound
    },
    {
        message:'You have a bug that needs to be fixed.',
        time:'12 hours ago',
        icon:Bug
    },
    {
        message:'Andi Lane subscribed to you',
        time:'Today, 11:59 AM',
        icon:Radio
    }
]

const activities = [
    {
        message:'You have a bug that needs to be fixed.',
        time:'Just now'
    },
    {
        message:'Released a new version',
        time:'59 minutes ago'
    },
    {
        message:"Submitted a bug",
        time:'12 hours ago',

    },
    {
        message:"Modified A data in Page X",
        time:"Today, 11:59 AM"
    },
    {
        message:'Deleted a page in Project X',
        time:'Feb 2, 2023'
    }

]

const contacts = [
    {
        name:'Natali Craig'
    },
    {
        name:'Drew Cano'
    },
    {
        name:'Orlando Diggs'
    },
    {
        name:'Andi Lane'
    },
    {
        name:'Kate Morrison'
    },
    {
        name:'Koray Okumus'
    },
]

export { pageMenus, notification, activities, contacts};
