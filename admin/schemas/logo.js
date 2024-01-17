import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";

export default {
  name: "logo", // энэ нэрийг солихоор sanity-гийн content алга болно.
  title: "Logo", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "logo",
      type: "string",
    },

    {
      name: "logo",
      title: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
