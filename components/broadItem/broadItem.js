
import { navigateTo } from '../../common/wx.js';
import { fetchMusicBroadcastingDetailsMessage } from '../../api/index.js';

Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleClick: function (e) {
      const { channelname, name } = e.currentTarget.dataset;
      navigateTo({
        url: `../broadDetail/broadDetail?channelname=${channelname}&name=${name}`
      });
    }
  }
})