
import { navigateTo } from '../../common/wx.js';
Component({
  properties: {
    item:{
      type: Object,
      value: {}
    }
  },
  methods: {
    handleClick: function (e) {
      const { type, name, bg, color } = e.currentTarget.dataset;
      console.log('--', type, name);
      navigateTo({
        url: `../rankDetail/rankDetail?type=${type}&name=${name}&bg=${bg}&color=${color}`
      });
    }
  }
})