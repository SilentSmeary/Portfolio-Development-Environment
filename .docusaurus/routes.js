import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f25'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b46'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '4c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ad3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '482'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5e7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '750'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '6cf'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '0c1'),
    exact: true
  },
  {
    path: '/blog/hundo',
    component: ComponentCreator('/blog/hundo', '1a2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'afa'),
    exact: true
  },
  {
    path: '/blog/tags/work-experience',
    component: ComponentCreator('/blog/tags/work-experience', 'e03'),
    exact: true
  },
  {
    path: '/blog/truenas-core',
    component: ComponentCreator('/blog/truenas-core', 'fb8'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'b2e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '642'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8fc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '983'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a03'),
            routes: [
              {
                path: '/docs/hello',
                component: ComponentCreator('/docs/hello', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e3f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
