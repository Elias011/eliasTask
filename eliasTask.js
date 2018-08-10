require('isomorphic-fetch');

const fetchScore = async (i) => {
  try {
    const url2 = await `https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`;
    const response2 = await fetch(url2);
    let singleArray = [];
    await singleArray.push (await response2.text())
    return singleArray
  } catch (error) {
    console.log('fetch failed', err);
  }
}

const logFetch = async (url) => {
  try {
    const response = await fetch(url);
    const topStories = await response.text()
    const arrayTopStories = topStories.split(',').map(Number);
   await arrayTopStories.map (i => {
      fetchScore (i)
    })
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}
logFetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)