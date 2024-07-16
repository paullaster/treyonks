import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'



export default createVuetify(
    {icons: {
        defaultSet: 'mdi',
      },
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              transparent: '#ffffff00',
             
            }
          },
        }
      },
    }
);