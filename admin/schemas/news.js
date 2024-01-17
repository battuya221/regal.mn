import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";

export default {
  name: "news", // энэ нэрийг солихоор sanity-гийн content алга болно.
  title: "Мэдээ мэдээлэл page", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "newstitle",
      title: "newstitle",
      type: "string",
    },

  
  ],
};
