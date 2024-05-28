export default function fetchURL(userInput) {
  var API_KEY = '44071670-df551d8a467c5c77b993c0d31';

  var URL = `https://pixabay.com/api/?key=${API_KEY}&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(URL, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(values => {
      return values;
    })
    .catch(error => console.log('--Error--:', error));
}
