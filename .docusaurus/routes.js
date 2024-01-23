import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '317'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '616'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '893'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2e8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3d0'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '6dd'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '715'),
    exact: true
  },
  {
    path: '/blog/truenas-core',
    component: ComponentCreator('/blog/truenas-core', 'e79'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '5ec'),
    exact: true
  },
  {
    path: '/blog/windows-server',
    component: ComponentCreator('/blog/windows-server', '37d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '84a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'da7'),
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
    component: ComponentCreator('/', '7d8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
