import { createFactory } from 'react';

import Nov0717 from '../posts/nov2017/Nov0717';
import Nov0817 from '../posts/nov2017/Nov0817';
import Nov0917 from '../posts/nov2017/Nov0917';
import Nov1017 from '../posts/nov2017/Nov1017';
import Nov1117 from '../posts/nov2017/Nov1117';


export const recentPosts = [
  {
    title: 'day 5',
    date: '11.11.2017',
    loadComponent: createFactory(Nov1117),
    slug: 'nov1117',
    order: 2,
    properties: { className: 'white' },
    imageUrl: 'https://i.imgur.com/cS0r3MV.jpg'
  },
  {
    title: 'day 4',
    date: '11.10.2017',
    loadComponent: createFactory(Nov1017),
    slug: 'nov1017',
    order: 1,
    properties: { className: 'white' },
    imageUrl: 'https://i.imgur.com/0ib9of8.jpg'

  },
  {
    title: 'day 3',
    date: '11.09.2017',
    loadComponent: createFactory(Nov0917),
    slug: 'nov0917',
    order: 0,
    properties: { className: 'grey' },
    imageUrl: 'https://i.imgur.com/GJBFwof.jpg'

  }
]



export default [
  {
    title: 'day 5',
    date: '11.11.2017',
    loadComponent: createFactory(Nov1117),
    slug: 'nov1117',
    order: 4,
    properties: { className: 'white' },
    imageUrl: 'https://i.imgur.com/cS0r3MV.jpg'
  },
  {
    title: 'day 4',
    date: '11.10.2017',
    loadComponent: createFactory(Nov1017),
    slug: 'nov1017',
    order: 3,
    properties: { className: 'white' },
    imageUrl: 'https://i.imgur.com/0ib9of8.jpg'

  },
  {
    title: 'day 3',
    date: '11.09.2017',
    loadComponent: createFactory(Nov0917),
    slug: 'nov0917',
    order: 2,
    properties: { className: 'grey' },
    imageUrl: 'https://i.imgur.com/GJBFwof.jpg'

  },
  {
    title: 'day 2',
    date: '11.08.2017',
    loadComponent: createFactory(Nov0817),
    slug: 'nov0817',
    order: 1,
    properties: { className: 'black' },
    imageUrl: 'https://i.imgur.com/oMMIsku.jpg'

  },
  {
    title: 'day 1: intro',
    date: '11.07.2017',
    loadComponent: createFactory(Nov0717),
    slug: 'nov0717',
    order: 0,
    properties: { className: 'white' },
    imageUrl: 'https://i.imgur.com/VVVQWjB.jpg'

  },
]

