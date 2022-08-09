import { Component } from 'react';

function getImages(foundImg, page) {
  return fetch(
    `https://pixabay.com/api/?key=28164685-e508b46b7d4362311384dafbb&q=${foundImg}&image_type=photo&pretty=true&orientation=horizontal&per_page=12&page=${page}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No results`));
  });
}
export default getImages;
