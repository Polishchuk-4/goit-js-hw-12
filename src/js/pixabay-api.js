import axios from 'axios';
export default async function fetchURL(userInput) {
  var API_KEY = '44071670-df551d8a467c5c77b993c0d31';
  const response = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: API_KEY,
      q: userInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
    },
  });
  return response.data;
}
// const searchParams = new URLSearchParams({
//   key: API_KEY,
//   q: userInput,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page: 15,
// });
// const response = await axios.get(`https://pixabay.com/api/?${searchParams}.`);
