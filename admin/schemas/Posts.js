import { BsFillFileEarmarkPostFill as icon } from "react-icons/md";


export default {
  name: "Posts", // энэ нэрийг солихоор sanity-гийн content алга болно.  
  title: "Мэдээ мэдээлэл", //sanity-гийн dashwoard-ны нэр
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Гарчиг",
      type: "string",
      description: "Мэдээний гарчиг, 50 тэмдэгтээс бүү хэтэрүүлээрэй",
      validation: Rule => [
        Rule.required().min(3).error('Мэдээний гарчиг хамгийн багадаа 4 тэмдэгтээс тогтонон'),
        Rule.max(50).warning('Мэдээний гарчиг, 50 тэмдэгтээс бүү хэтэрүүлээрэй')
      ]
    },
    {
      name: "sub_title",
      title: "Дэд гарчиг",
      type: "string",
    },
    {
      name: "publisher1",
      title: "Нийтлэлч",
      type: "reference",
      to: [{type: "publisher"}]
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
   
    {
      name: "releaseDate",
      title: "Огноо",
      type: "datetime",
    },
    {
      name: "description",
      title: "description",
      type: "text",
    },
    {
      name: "externalId",
      title: "ID",
      type: "number",
    },
    {
      name: "popularity",
      title: "Алдар нэр ",
      type: "number",
    },
    {
      name: "poster",
      title: "Мэдээний зураг",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Мэдээний агууллага',
      of: [
        {
          type: 'block',
        },
        {
          type: "image",
        }
      ]
    },
    {
      name: "castMembers",
      title: "Cast Members",
      type: "array",
      of: [{ type: "castMember" }],
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
  publisher:{  
    title: "Нийтлэгч",
    name: "publisher",
    type: "document",
    fields: [
      {
        title: "Нийтлэгчийн нэр",
        name: "title",
        type: "string",
      },
      {
        title: "Нийтлэгчийн зураг",
        name: "Зураг",
        type: "image",
      },
    ],
  },

};
