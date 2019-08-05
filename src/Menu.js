const Menu = [
  {
    heading: "Main Navigation",
    translate: "sidebar.heading.HEADER"
  },
  {
    name: "Contacts",
    // Not including the "/" means it routes relative to the current page,
    //instead of navigating from the route. ie=.e. if you are on /page2, and navigate to contacts,
    //it would be /page2/contacts, the "/" means it goes to /contacts instead
    path: "/contacts",

    icon: "icon-people",
    translate: "sidebar.nav.DELIVERIES"
  },
  {
    name: "Axios Examples",
    path: "/axiosscreen"
  }

  // {
  //     name: 'Single View',
  //     path: 'singleview',
  //     icon : 'icon-grid',
  //     translate: 'sidebar.nav.SINGLEVIEW'
  // },
  // {
  //     name: 'Menu',
  //     icon: 'icon-speedometer',
  //     translate: 'sidebar.nav.MENU',
  //     label: { value: 1, color: 'info' },
  //     submenu: [{
  //         name: 'Submenu',
  //         translate: 'sidebar.nav.SUBMENU',
  //         path: 'submenu'
  //     }]
  // }
];

export default Menu;
