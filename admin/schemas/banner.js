import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";

export default {
  name: "Banner", // энэ нэрийг солихоор sanity-гийн content алга болно.  Энэ нэрээр дуудаж ажилуулна.
  title: "Banner", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Гарчиг",
      type: "string",
    },
    {
      name: "slug",
      title: "slug хаяг",
      type: "slug",
      options: { // generate хийхэд автоматаар хөрвүүлэх 
        source: "title",
        maxLength: 200,
        slugify: input => input
        .toLowerCase()
        .replace(/\s+/g, '-')
        .slice(0, 200)
      },
     
    },
   
    {
      name: "Date",
      title: "Огноо",
      type: "datetime",
    },
   
   
    {
      name: "coverImage",
      title: "banner зураг",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
      castName0: "castMembers.0.category.name",
      castName1: "castMembers.1.category.name",
    },
    prepare(selection) {
      const year = selection.date && selection.date.split("-")[0];
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(", ");

      return {
        title: `${selection.title} ${year ? `(${year})` : ""}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      };
    },
  },
};
