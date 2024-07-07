const apiKey = {
  api_key: "55b21f5e-0f1b-4a8d-bed2-9aaf0838e2a3",
};

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async postComment(comment) {
    try {
      await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment
      );
    } catch (e) {
      console.log(e);
    }
  }

  async getComment() {
    try {
      const comments = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      comments.data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      return comments.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getShows() {
    try {
      const shows = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      return shows.data;
    } catch (e) {
      console.log(e);
    }
  }
}

const apiData = new BandSiteApi(apiKey.api_key);

export default apiData;
