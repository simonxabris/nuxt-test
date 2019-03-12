const pkg = require('./package')
const axios = require('axios');

const tribes = require('./mocks/tribes.json');

module.exports = {
  mode: 'universal',
  generate: {
    devtools: true,
    routes: function() {
      return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        console.log('tribes: ', res.data);
        routes = res.data.map(user => {
          return {
            route: `/tribes/${user.id}`,
            payload: user
          }
        })
        
        return [{route: '/tribes', payload: tribes}, ...routes];
      });
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
