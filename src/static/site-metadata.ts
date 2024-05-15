interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Home Page',
  siteUrl: 'https://laqieer.github.io',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal running page',
  navLinks: [
    {
      name: 'Home',
      url: 'https://laqieer.github.io/running.html',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/136949100',
    },
    {
      name: 'About',
      url: 'https://github.com/laqieer/running_page/',
    },
  ],
};

export default data;
