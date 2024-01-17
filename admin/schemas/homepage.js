import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";

export default {
  name: "home", // энэ нэрийг солихоор sanity-гийн content алга болно.
  title: "Нүүр page", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "benetechTitle",
      title: "benetech брэндийн гарчиг",
      type: "string",
    },
    {
      name: "benetechdesc",
      title: "benetech брэндийн агуулга",
      type: "string",
    },
    {
      name: "benetechimage1",
      title: "benetech зураг 1",
      type: "image",
    },
    {
      name: "benetechimage2",
      title: "benetech зураг 2",
      type: "image",
    },
    {
      name: "benetechimage3",
      title: "benetech зураг 3",
      type: "image",
    },
  ],
};
