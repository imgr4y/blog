import { createFactory } from 'react';

import Jan2218 from '../posts/jan2018/Jan2218';
import Nov0817 from '../posts/nov2017/Nov0817';
import Nov0917 from '../posts/nov2017/Nov0917';
import Nov1017 from '../posts/nov2017/Nov1017';
import Nov1117 from '../posts/nov2017/Nov1117';
import Nov1317 from '../posts/nov2017/Nov1317';


export const recentPosts = [
  // {
  //   title: 'day 6',
  //   date: '11.13.2017',
  //   loadComponent: createFactory(Nov1317),
  //   slug: 'nov1317',
  //   order: 2,
  //   properties: { className: 'white' }
  // },
  {
    title: 'day 1: intro',
    date: '01.22.2018',
    loadComponent: createFactory(Jan2218),
    slug: 'jan2218',
    order: 1,
    properties: { className: 'black' }
  },
]



export default [
  // {
  //   title: 'day 5',
  //   date: '11.11.2017',
  //   loadComponent: createFactory(Nov1117),
  //   slug: 'nov1117',
  //   order: 4,
  //   properties: { className: 'white' }
  // },
  // {
  //   title: 'day 4',
  //   date: '11.10.2017',
  //   loadComponent: createFactory(Nov1017),
  //   slug: 'nov1017',
  //   order: 3,
  //   properties: { className: 'white' }
  // },
  // {
  //   title: 'day 3',
  //   date: '11.09.2017',
  //   loadComponent: createFactory(Nov0917),
  //   slug: 'nov0917',
  //   order: 0,
  //   properties: { className: 'grey' }
  // },
  // {
  //   title: 'day 2',
  //   date: '11.08.2017',
  //   loadComponent: createFactory(Nov0817),
  //   slug: 'nov0817',
  //   order: 1,
  //   properties: { className: 'white' }
  // },
  {
    title: 'day 1: intro',
    date: '01.22.2017',
    loadComponent: createFactory(Jan2218),
    slug: 'jan2218',
    order: 2,
    properties: { className: 'black' }
  },
]

