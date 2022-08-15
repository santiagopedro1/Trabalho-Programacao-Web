// FILE: main.js

import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
	plugins: { Notify }, // import Quasar plugins and add here
	config: {
		brand: {
			primary: '#2277cc',
			secondary: '#26A69A',
			accent: '#9C27B0',

			dark: '#1d1d1d',
			'dark-page': '#121212',

			positive: '#21BA45',
			negative: '#C10015',
			info: '#31CCEC',
			warning: '#F2C037'
		}
	}
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
