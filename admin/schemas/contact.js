import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";

export default {
  name: "contact", // энэ нэрийг солихоор sanity-гийн content алга болно.
  title: "Холбоо барих page", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "contactbanner",
      title: "Banner зураг оруулна уу?",
      type: "image",
    },

    {
      name: "contactMenutitle",
      title: "Цэсний нэрийг оруулна уу?",
      type: "string",
    },
    {
      name: "contacttitle",
      title: "Гарчиг оруулна уу?",
      type: "string",
    },

    {
      name: "contacdescription",
      title: "Description оруулна уу?",
      type: "string",
    },
    {
      name: "contactimage",
      title: "Зураг оруулна уу?",
      type: "image",
    },
    {
      name: "contactphone",
      title: "Утасаа оруулна уу?",
      type: "number",
    },
    {
      name: "contactemail",
      title: "Емэйл хаягаа оруулна уу?",
      type: "string",
    },
    {
      name: "contactaddress",
      title: "Хаягаа оруулна уу?",
      type: "string",
    },
    {
      name: "facebook",
      title: "Facebook хаягаа оруулна уу?",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram хаягаа оруулна уу?",
      type: "string",
    },
    {
      name: "youtube",
      title: "Youtube хаягаа оруулна уу?",
      type: "string",
    },
  ],
};
