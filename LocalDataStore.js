import {func} from 'prop-types';

export const mySingleton = (function () {
  var instance;
  function init() {
    var userEmail = '';

    return {
      setUserEmail: function (data) {
        userEmail = data;
      },
      getUserEmail: function () {
        return userEmail;
      },
    };
  }
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
