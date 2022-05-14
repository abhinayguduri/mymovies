const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "56ccd81cb2bf1ab18f975d73140c4263",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
