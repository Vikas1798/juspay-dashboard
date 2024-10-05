import { Bug, Radio, ShieldEllipsis, UserRound } from 'lucide-react';
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11 } from '../assets';

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
        time:'Just now',
        image:image1
    },
    {
        message:'Released a new version',
        time:'59 minutes ago',
        image:image2
    },
    {
        message:"Submitted a bug",
        time:'12 hours ago',
        image:image3

    },
    {
        message:"Modified A data in Page X",
        time:"Today, 11:59 AM",
        image:image4
    },
    {
        message:'Deleted a page in Project X',
        time:'Feb 2, 2023',
        image:image5
    }

]

const contacts = [
    {
        name:'Natali Craig',
        image:image6
    },
    {
        name:'Drew Cano',
        image:image7
    },
    {
        name:'Orlando Diggs',
        image:image8
    },
    {
        name:'Andi Lane',
        image:image9
    },
    {
        name:'Kate Morrison',
        image:image10
    },
    {
        name:'Koray Okumus',
        image:image11
    },
]

const stats = [
    {
        name:'Customers',
        revenue:'3,781',
        profitLoss:'+11.01%',
        bg:"bg-[#E3F5FF]",
        status:1
    },
    {
        name:'Orders',
        revenue:'1,219',
        profitLoss:'-0.03%',
        bg:'bg-[#F7F9FB]',
        status:0
    },
    {
        name:'Revenue',
        revenue:'$695',
        profitLoss:'+15.03%',
        bg:'bg-[#F7F9FB]',
        status:1
    },
    {
        name:'Growth',
        revenue:'30.1%',
        profitLoss:'+6.08%',
        bg:'bg-[#E5ECF6]',
        status:1
    }
]

export { pageMenus, notification, activities, contacts, stats};
