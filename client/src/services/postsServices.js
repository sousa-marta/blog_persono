import axios from 'axios';

export const postsServices = {
  getPostsList,
  insertPost,
};

function getPostsList(callback, errorcallback) {
  axios
    .get('/getposts')
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      // catch error
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

function insertPost(data, callback, errorcallback) {
  console.log('data', data);

  axios
    .post('/insertpost', data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log(res);
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}
