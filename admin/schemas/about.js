import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";

export default {
  name: "about", // энэ нэрийг солихоор sanity-гийн content алга болно.
  title: "Бидний тухай page", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "aboutMenutitle",
      title: "Цэсний нэрийг оруулна уу?",
      type: "string",
    },
    {
        name: "abouttitle",
        title: "Бидний тухай гарчиг оруулна уу?",
        type: "string",
      },
      {
        name: "aboutimage",
        title: "Бидний тухай зураг оруулна уу?",
        type: "image",
      },
      {
        name: "leadershiptitle",
        title: "leadership гарчигийг оруулна уу?",
        type: "string",
      },
      {
          name: "content",
          title: "leadership агуулга",
          type: "string",
        //   of: [
        //     {
        //       type: "block",
        //     },
        //     {
        //       type: "image",
        //    },
        //  ]
       },
        {
            name: "founder1",
            title: "Нэр",
            type: "string",
          },
          {
            name: "foundersub1",
            title: "Албан тушаал",
            type: "string",
          },
        {
          name: "founderimage1",
          title: "Profile зураг оруулна уу?",
          type: "image",
        },
        {
            name: "founder2",
            title: "Нэр",
            type: "string",
          },
          {
            name: "foundersub2",
            title: "Албан тушаал",
            type: "string",
          },
        {
          name: "founderimage2",
          title: "Profile зураг оруулна уу?",
          type: "image",
        },
        {
            name: "founder3",
            title: "Нэр",
            type: "string",
          },
          {
            name: "foundersub3",
            title: "Албан тушаал",
            type: "string",
          },
        {
          name: "founderimage3",
          title: "Profile зураг оруулна уу?",
          type: "image",
        },
        


  
  ],
};
