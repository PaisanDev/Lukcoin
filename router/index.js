export default [
  {
    // icon: 'mdi-apps',
    title: 'Search',
    to: '/',
    href: '',
  },
  {
    // icon: 'mdi-apps',
    title: 'Overview',
    to: '/overview',
    href: '/overview/',
    children: [
      {
        // icon: 'mdi-apps',
        title: 'Project Detail',
        to: '/overview/:name',
        href: '/overview/_name.vue',
      },
    ],
  },

  {
    // icon: 'mdi-apps',
    title: 'Comparison',
    to: '/Comparison',
    href: '',
  },
]
