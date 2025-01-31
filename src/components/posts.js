import Img_1 from "../assets/images/person/1.jpg";
import Img_2 from "../assets/images/person/2.jpg";
import Img_3 from "../assets/images/person/3.jpg";
import Img_4 from "../assets/images/person/4.jpg";
import Img_5 from "../assets/images/person/5.jpg";

const posts = [
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
      likes: 10,
      comments: 5,
      img: Img_1,
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Hello world!",
      likes: 5,
      comments: 2,
      img: Img_2,
    },
    {
      id: 3,
      author: "Bob Johnson",
      content: "This is a longer post with more content.",
      likes: 20,
      comments: 10,
      img: Img_3
    },
    {
      id: 4,
      author: "Alice Brown",
      content: "Another post!",
      likes: 8,
      comments: 3,
      img: Img_4
    },
    {
      id: 5,
      author: "Mike Davis",
      content: "This is my last post for now.",
      likes: 15,
      comments: 6,
      img: Img_5
    },
  ];



export default posts

