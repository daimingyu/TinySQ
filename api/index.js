import { fetch } from 'fetch';

//基础url 上线版
const baseUrl = 'https://api.apiopen.top';

//音乐电台接口
const musicBroadcastingPath = '/musicBroadcasting';

//音乐电台详情接口
const musicBroadcastingDetailsPath = '/musicBroadcastingDetails';

//音乐排行榜接口
const musicRankingsPath = '/musicRankings';

//音乐排行榜详情接口
const musicRankingsDetailsPath = '/musicRankingsDetails';

//音乐详情接口
const musicDetailsPath = '/musicDetails';

//音乐搜索接口
const searchMusicPath = '/searchMusic';

/**
 * 获取音乐排行榜AJAX请求
 */
const fetchMusicRankingsMessage = () => {
  return fetch(baseUrl + musicRankingsPath, {});
}

/**
 * 获取音乐排行榜详情AJAX请求
 */
const fetchMusicRankingsDetailsMessage = (params) => {
  return fetch(baseUrl + musicRankingsDetailsPath, params);
}

/**
 * 获取音乐详情AJAX请求
 */
const fetchmusicDetailsMessage = (params) => {
  return fetch(baseUrl + musicDetailsPath, params);
}

/**
 * 获取精选电台AJAX请求
 */
const fetchMusicBroadcastingMessage = () => {
  return fetch(baseUrl + musicBroadcastingPath, {});
}

/**
 * 获取电台详情AJAX请求
 */
const fetchMusicBroadcastingDetailsMessage = (params) => {
  return fetch(baseUrl + musicBroadcastingDetailsPath, params);
}

/**
 * 搜索音乐接口
 */
const fetchSearchMusicMessage = (params) => {
  return fetch(baseUrl + searchMusicPath, params);
}

export {
  fetchMusicRankingsMessage,
  fetchMusicRankingsDetailsMessage,
  fetchmusicDetailsMessage,
  fetchMusicBroadcastingMessage,
  fetchMusicBroadcastingDetailsMessage,
  fetchSearchMusicMessage
}
