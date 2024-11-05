const PixabayApiKey = '30127977-afd00810882476e7ef9a8a757';

const baseUrl = `https://pixabay.com/api/?key=${PixabayApiKey}`;

export const searchImages = (query, perPage) => {
  const url = `${baseUrl}&q=${query}&per_page=${perPage}`;

  const response = fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
};
