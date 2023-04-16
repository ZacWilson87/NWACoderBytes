import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#30003C",
            secondary: "#FF35D3",
            textSecondary: "#FF35D3",
            accent: "#FF3D00"
          },
        },
      },
});
