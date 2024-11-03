const PixabayApiKey = '30127977-afd00810882476e7ef9a8a757';

const baseUrl = `https://pixabay.com/api/?key=${PixabayApiKey}&per_page=15`;

export const searchImages = query => {
  const url = `${baseUrl}&q=${query}`;

  const response = fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
};
