import { BASE_URL, SEARCH_CLIENT } from 'config';

// 출처 : https://stackoverflow.com/questions/37230555/get-with-query-string-with-fetch-in-react-native
/**
 * 아래와 같이 인자를 받으면
 * obj = {
 *   key1: value1
 *   key2: value2
 * }
 * 
 * 아래와 같이 리턴됩니다.
 * @returns key1=value1&key2=value2
 */
const objectToQueryString = (obj: any) => {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return keyValuePairs.join('&');
};

// 예외처리를 추가하였습니다.
export const getClientList = async (data: any) => {
  try {
    const queryString = objectToQueryString(data);
    const response = await fetch(`${BASE_URL}/client?${queryString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    // 에러처리
  }
};

export const sample = async (data: any) => {
  try {
    const queryString = objectToQueryString(data);
    const response = await fetch(`${BASE_URL}/sample?${queryString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    // 에러 리턴
  }
}