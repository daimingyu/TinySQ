
import { DEFAULT_MUSIC } from '../../config/index.js';
import { fetchmusicDetailsMessage } from '../../api/index.js';
import pubsub from '../../utils/pubsub.js';

Component({
  properties: {
    bg: {
      type: String,
      value: ""
    },
    name: {
      type: String,
      value: ""
    },
    artname: {
      type: String,
      value: ""
    },
    songid: {
      type: String,
      value: ""
    }
  },
  methods: {
    handleClick: function (e) {
      const id = e.currentTarget.dataset.id;
      fetchmusicDetailsMessage({ id }).then((response) => {
        const { 
          songLink: musicUrl = DEFAULT_MUSIC.musicUrl, 
          songName: musicName = DEFAULT_MUSIC.musicName, 
          artistName = DEFAULT_MUSIC.artistName, 
          songPicBig: musicPic = DEFAULT_MUSIC.musicPic 
        } = response.data.result.songList[0];
        pubsub.emit('change', { musicName, artistName, musicPic, musicUrl});
      });
    }
  }
})