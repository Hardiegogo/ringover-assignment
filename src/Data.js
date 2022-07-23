import ksl from './assets/products/shoe.jpg'
import ksw from './assets/products/shoe2.png'
import { v4 as uuid } from 'uuid'
import toni from './assets/team/tonikroos.jpg'
import zidane from './assets/team/zidane.jpg'
import james from './assets/team/james.jpg'
import christiano from './assets/team/christiano.jpg'
import iker from './assets/team/ikercasillas.jpg'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
import medium from './assets/medium.png'
import nba from './assets/nba.png'
export const products=[
    {
        name:'KSL 01',
        imgLink:ksl,
        price:2000,
        _id:uuid(),
        rating:3,
        type:"loafers"
    },
    {
        name:'KSW 01',
        imgLink:ksw,
        price:2500,
        _id:uuid(),
        rating:3,
        type:"sneakers"
    },
    {
        name:"KSL 02",
        imgLink:ksl,
        price:3000,
        _id:uuid(),
        rating:3,
        type:"loafers"

    },
    {
        name:'KSW 02',
        imgLink:ksw,
        price:3500,
        _id:uuid(),
        rating:4,
        type:"sneakers"

    },
    {
        name:"KSL 03",
        imgLink:ksl,
        price:4000,
        _id:uuid(),
        rating:5,
        type:"loafers"

    },
    {
        name:'KSW 03',
        imgLink:ksw,
        price:6000,
        _id:uuid(),
        rating:2,
        type:"sneakers"

    },
]

export const teamMembers=[
    {
        name:'Zidane',
        domain:"Leadership and management",
        profile:zidane,
        _id:uuid(),
        social:[linkedin,medium,facebook]
    },
    {
        name:'Toni kroos',
        domain:"product developer",
        profile:toni,
        _id:uuid(),
        social:[linkedin,medium]
    },
    {
        name:'Iker Casillas',
        domain:"Marketing strategy",
        profile:iker,
        _id:uuid(),
        social:[medium]
    },
    {
        name:'James',
        domain:"Product designer",
        profile:james,
        _id:uuid(),
        social:[medium,nba]
    },
    {
        name:'Christiano',
        domain:"Financial operations",
        profile:christiano,
        _id:uuid(),
        social:[linkedin,facebook]
    }
]