import axios from "axios";

class ItemService {
  async search(term) {
    return await axios
      .get("https://AlbionChartsAPI.maxbethke.repl.co/items/search", {
        params: {
          q: term
        }
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        this.handleError(error);
        return [];
      });
  }

  async icon(itemId) {
    return await axios
      .get("http://render.albiononline.com/v1/item/" + itemId + ".png", {
        headers: {
          "Content-type": "image/png"
        }
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        this.handleError(error);
        return [];
      });
  }

  handleError(error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("No Response received");
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
  }
}

export default new ItemService();
