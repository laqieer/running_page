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

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

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
      name: 'Race',
      url: 'https://laqieer.github.io/running_race/',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/136949100',
    },
    {
      name: 'Parkrun',
      url: 'https://paulsrunning.com/timing/results.php?user=1547',
    },
    {
      name: 'About',
      url: 'https://github.com/laqieer/running_page/',
    },
  ],
};

export default data;
