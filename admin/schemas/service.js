import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";

export default {
  name: "service", // энэ нэрийг солихоор sanity-гийн content алга болно.
  title: "Үйлчилгээ page", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "serviceMenutitle",
      title: "Цэсний нэрийг оруулна уу?",
      type: "string",
    },
    {
        name: "servicetitle1",
        title: "Гарчиг оруулна уу?",
        type: "string",
      },
      {
        name: "servicedescription1",
        title: "Description оруулна уу?",
        type: "string",
      },
      {
        name: "serviceimage1",
        title: "Үйлчилгээ 1 зураг оруулна уу?",
        type: "image",
      },
      {
        name: "servicetitle2",
        title: "Гарчиг оруулна уу?",
        type: "string",
      },
      {
        name: "servicedescription2",
        title: "Description оруулна уу?",
        type: "string",
      },
      {
        name: "serviceimage2",
        title: "Үйлчилгээ 1 зураг оруулна уу?",
        type: "image",
      },
      {
        name: "servicetitle3",
        title: "Гарчиг оруулна уу?",
        type: "string",
      },
      {
        name: "servicedescription3",
        title: "Description оруулна уу?",
        type: "string",
      },
      {
        name: "serviceimage3",
        title: "Үйлчилгээ 1 зураг оруулна уу?",
        type: "image",
      },
  ],
};
