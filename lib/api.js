import client from "./sanity";
export const getLogo = async () => {
  const logo = await client.fetch(
    `*[_type=="logo"]{title,  'logo':logo.asset->url,}`
  );

  return logo;
};

export const getAllPots = async () => {
  const post = await client.fetch(
    `*[_type=="Posts"]{_createdAt, title, 'slug':slug.current, description, 'news_image':poster.asset->url, 'publisher':publisher1->{title, 'picture':picture.asset->url}}`
  );

  return post;
};
export default getAllPots;
export const getBenetech = async () => {
  const benetech = await client.fetch(
    `*[_type=="home"]{_createdAt, benetechTitle, benetechdesc, 'benetechimage1': benetechimage1.asset->url, 'benetechimage2': benetechimage2.asset->url, 'benetechimage3': benetechimage3.asset->url,}`
  );

  return benetech;
};

export const getPostBySlug = async (slug) => {
  const posts = await client.fetch(
    `*[_type=="Posts" && slug.current==$slug]{_createdAt, title, 'slug':slug.current, description, 'news_image':poster.asset->url, 'publisher':publisher1->{title, 'picture':picture.asset->url}}`,
    { slug }
  );

  return posts;
};

export const getAllbanner = async () => {
  const banner = await client.fetch(
    `*[_type=="Banner"]{_createdAt, title, date, 'image': coverImage.asset->url,  'slug':slug.current }`
  );

  return banner;
};

// content[]{..., 'asset': asset->} ,
// About Page
export const getAllAboutPage = async () => {
  const about = await client.fetch(
    `*[_type=="about"]{ aboutMenutitle, abouttitle, 'aboutimage': aboutimage.asset->url, leadershiptitle, content, founder1,  foundersub1, 'founderimage1': founderimage1.asset->url, founder2, foundersub2,  'founderimage2': founderimage2.asset->url, founder3, foundersub3, 'founderimage3': founderimage3.asset->url,  }`
  );

  return about;
};
export const getAllServicePage = async () => {
  const service = await client.fetch(
    `*[_type=="service"]{serviceMenutitle, servicetitle1, servicedescription1,'serviceimage1': serviceimage1.asset->url, servicetitle2, servicedescription2,'serviceimage2': serviceimage2.asset->url, servicetitle3, servicedescription3,'serviceimage3': serviceimage3.asset->url, }`
  );

  return service;
};
export const getAllContactPage = async () => {
  const contact = await client.fetch(
    `*[_type=="contact"]{'contactbanner': contactbanner.asset->url,contactMenutitle, contacttitle,  contacdescription,'contactimage': contactimage.asset->url, contactphone, contactemail, contactaddress, facebook, instagram, youtube,}`
  );

  return contact;
};
