// Эхлээд бид схем үүсгэгчийг импортлох ёстой
import createSchema from "part:@sanity/base/schema-creator";
// Дараа нь тэдгээрийг илрүүлж болзошгүй нэмэлт өргөтгөлүүдээс схемийн төрлийг импортол
import schemaTypes from "all:part:@sanity/base/schema-type";

//Бид объект болон баримт бичгийн схемүүдийг импортолдог
// import blockContent from "./blockContent";
import castMember from "./castMember";
import screening from "./screening";
import category from "./category";
import logo from "./logo";
import banner from "./banner";
import Posts from "./Posts";
import Publisher from "./Publisher";
import homepage from "./homepage";
import aboutPage from "./about";
import servicePage from "./service";
import newsPage from "./news"
import contactPage from "./contact"



// Дараа нь бид схемээ барилгачинд өгч, үр дүнг Sanity-д өгнө
export default createSchema({
  // Бид схемээ нэрлэнэ
  name: "default",
  // Дараа нь манай баримт бичгийн төрлийг нэгтгэнэ
  // суулгасан нэмэлт өргөтгөлүүдэд
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    logo,
     banner,
    Posts,
    homepage,
    aboutPage,
    servicePage,
    newsPage,
    contactPage,
    category,
    screening,
    castMember,
    Publisher,
  ]),
});
