import axios from 'axios';

const search = async (query) => {
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
