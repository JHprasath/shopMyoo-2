// src/collectionService.js
import collectionApi from './apiCollection';

export const getCollections = async () => {
  try {
    const res = await collectionApi.get('/all');
    return res.data;
  } catch (err) {
    console.error("Collection fetch error:", err.message);
    throw err;
  }
};

export const postCollection = async (payload) => {
  try {
    const res = await collectionApi.post('', payload);
    return res.data;
  } catch (err) {
    console.error("Collection post error:", err.message);
    throw err;
  }
};
