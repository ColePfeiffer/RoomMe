import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: 'B1493D',
        secondary: '315458',
        accent: '9FB18F',
        success: 'FFFD70',
        info: 'FFFD70',
        error: '764134',

    }
});

export default new Vuetify({
});
