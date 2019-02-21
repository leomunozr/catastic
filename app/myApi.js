const baseUrl = 'http://localhost:8080/api';

export const addToFavs = (imgId) => {
  return fetch(`${baseUrl}/images/fav/${imgId}`, {
    headers: {
      'api_key': 'g00dLuCk'
    },
    method: 'post'
  })
    .then((res) => res.json());
};

export const getNewImage = () => {
  return fetch(`${baseUrl}/images`, {
    headers: {
      'api_key': 'g00dLuCk'
    }
  })
    .then((res) => res.json());
};

export const getAllFavs = () => {
  return fetch(`${baseUrl}/images/fav`, {
    headers: {
      'api_key': 'g00dLuCk'
    }
  })
    .then((res) => res.json());
};

export const deleteFav = (imgId) => {
  return fetch(`${baseUrl}/images/fav/${imgId}`, {
    headers: {
      'api_key': 'g00dLuCk'
    },
    method: 'delete'
  });
}