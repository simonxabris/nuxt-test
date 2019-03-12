const pkg = require('./package')
const axios = require('axios');

module.exports = {
  mode: 'universal',
  generate: {
    devtools: true,
    routes: async function() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      const users = response.data.map(user => ({
        route: `/tribes/${user.id}`,
        payload: user
      }));

      const tribes_response = await axios.get('https://tribe-mock.herokuapp.com/tribes');
      const tribes = tribes_response.data;

      console.log('USERS: ', users);
      console.log('TRIBES: ', tribes);

      return [{route: '/tribes', payload: tribes}, ...users];
      }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
