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
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
}

export default new ItemService();
