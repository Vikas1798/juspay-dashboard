import { ShieldEllipsis } from 'lucide-react'

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

export { pageMenus };
