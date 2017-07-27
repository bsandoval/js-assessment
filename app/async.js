exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve) => {
        resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
          type: 'GET',
          url: url,
          success: function(data) {
            var array = [];
            for (i = 0; i < data.people.length; i++) {
              array.push(data.people[i].name);
            }
            resolve(array.sort());
          }
      }).fail(function (error) {
          reject(error);
      });
    });
  }
};
