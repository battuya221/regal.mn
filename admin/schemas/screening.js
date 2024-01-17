import { BsFileEarmarkPost as icon } from "react-icons/md";

export default {
  name: "screening",
  title: "screening",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Жишээ нь: screening үзүүлж",
    },
    {
      name: "screening",
      title: "screening",
      type: "reference",
      to: [{ type: "screening" }],
      description: "Бид ямар screening үзүүлж байна",
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
      description:
        "Энэ дэлгэцийн нүүрэн талд харагдах үед нийтлэхээр тохируулна",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
      description: "Шалгалт хаана явагдах вэ?",
    },
    {
      name: "beginAt",
      title: "Starts at",
      type: "datetime",
      description: "Шалгалт хэзээ эхлэх вэ?",
    },
    {
      name: "endAt",
      title: "Ends at",
      type: "datetime",
      description: "When does the screening end?",
    },
    {
      name: "allowedGuests",
      title: "Who can come?",
      type: "string",
      options: {
        list: [
          { title: "Members", value: "members" },
          { title: "Members and friends", value: "friends" },
          { title: "Anyone", value: "anyone" },
        ],
        layout: "radio",
      },
    },
    {
      name: "infoUrl",
      title: "More info at",
      type: "url",
      description:
        "URL to imdb.com, rottentomatoes.com or some other place with reviews, stats, etc",
    },
    {
      name: "ticket",
      title: "Ticket",
      type: "file",
      description: "PDF for printing a physical ticket",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "movie.poster",
    },
  },
};
