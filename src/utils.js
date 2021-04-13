/* eslint-disable no-console */
import axios from 'axios';

const search = async (query) => {
  console.log('Hello');
  let source;
  if (source) {
    source.cancel();
  }
  source = axios.CancelToken.source();
  const res = await axios.get(query, { cancelToken: source.token });
  const result = res.data;
  return result;
};

export default search;
