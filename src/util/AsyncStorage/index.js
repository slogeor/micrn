/**
 * @providesModule storageModule
 */

import { AsyncStorage } from 'react-native';
import sizeof from 'object-sizeof';

const CLEAR_CACHE_KEY = 'CLEAR_CACHE_KEY';

const storage = {
  /*
   * @method: setItem
   * @params: (key, value)
   * @return: Promise
  */
  setItem(key, value, option) {
    const defaultOption = {
      canClear: false,
      expireDate: null,
    };

    option = Object.assign(defaultOption, option);

    return new Promise((res, rej) => {
      const data = {
        timestamp: new Date().getTime(),
        data: value,
        expireDate: option.expireDate,
      };
      if (option.canClear) {
        this.addKeyToClear(key);
      }
      AsyncStorage.setItem(key, JSON.stringify(data)).then(res, rej);
    }).catch(() => {});
  },
  /*
   * @method: getItem
   * @params: (key)
   * @return: Promise
  */
  getItem(key) {
    return new Promise((res, rej) => {
      AsyncStorage.getItem(key).then((str) => {
        if (str) {
          try {
            let cache;
            if (str.startsWith('%7B')) {
              cache = JSON.parse(decodeURIComponent(str));
            } else {
              cache = JSON.parse(str);
            }
            if (cache.expireDate && cache.expireDate <= +new Date()) {
              rej(null);
              this.removeItem(key);
            } else {
              res(cache.data);
            }
          } catch (e) {
            rej(e);
          }
        } else {
          rej(str);
        }
      }).catch(rej);
    }).catch(() => {});
  },

  /*
   * @method: removeItem
   * @params: (keys)  删除一个字段
   * @return: Promise
   */
  removeItem(key) {
    return new Promise((res, rej) => {
      AsyncStorage.removeItem(key).then(res, rej);
    }).catch(() => {});
  },

  /*
   * @method: multiRemove
   * @params: (keys)  删除所有键在keys数组中的数据，keys需要为数组格式
   * @return: Promise
   */
  multiRemove(keys) {
    return new Promise((res, rej) => {
      AsyncStorage.multiRemove(keys).then(res, rej);
    }).catch(() => {});
  },

  /*
   * @method: mergeItem
   * @params: (key, value: Object)
   * @return: Promise
  */
  mergeItem(key, value) {
    return new Promise((res, rej) => {
      AsyncStorage.getItem(key).then((str) => {
        if (str) {
          try {
            const data = JSON.parse(decodeURIComponent(str)).data;
            const newData = {
              timestamp: new Date().getTime(),
              data: value,
            };
            if (Object.prototype.toString.call(data) === '[object Object]'
              && Object.prototype.toString.call(value) === '[object Object]') {
              newData.data = Object.assign({}, data, value);
            }
            AsyncStorage.setItem(key, encodeURIComponent(JSON.stringify(newData))).then(res, rej);
          } catch (e) {
            rej(e);
          }
        } else {
          rej(str);
        }
      }).catch(rej);
    });
  },

  /**
   * @method: addKeyToClear
   * @params: (value)
   */
  addKeyToClear(value) {
    this.getItem(CLEAR_CACHE_KEY)
    .then((data) => {
      const clearArr = data || [];
      if (clearArr.indexOf(value) >= 0) {
        return;
      }
      clearArr.push(value);
      this.setItem(CLEAR_CACHE_KEY, clearArr);
    });
  },

  /**
   * @method: clearCache
   * @return: Promise
   */
  clearCache() {
    return new Promise((resolve, reject) => {
      this.getItem(CLEAR_CACHE_KEY)
      .then((data) => {
        if (data) {
          this.multiRemove([...data, CLEAR_CACHE_KEY])
          .then(resolve, reject);
        } else {
          resolve();
        }
      }, reject);
    });
  },

  /**
   * @method: getCacheSize
   * @return: Promise
   */
  getCacheSize() {
    return new Promise((resolve, reject) => {
      this.getItem(CLEAR_CACHE_KEY)
      .then((keys) => {
        if (keys) {
          let size = 0;
          let count = 0;
          keys.forEach((key) => {
            this.getItem(key)
            .then((data) => {
              size += sizeof(data);
              count += 1;
              if (count === keys.length) {
                resolve(size);
              }
            });
          });
        } else {
          resolve(0);
        }
      }, reject);
    });
  },
};

export default storage;
