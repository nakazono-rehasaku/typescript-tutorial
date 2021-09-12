import axios from "axios"
export {};

const url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

axios.get(url).then(res => {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = res.data;
  data = [
    {
      id: 1,
      title: "title",
      description: "description"
    }
  ]
  console.log(data);
});
