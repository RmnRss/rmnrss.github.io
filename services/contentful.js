const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getSingleEntry(id) {
  const entry = await client
    .getEntry(id)
    .then((item) => item.fields)
    .catch((err) => {
      throw err;
    });

  return entry;
}

export async function getContentTypeEntries(id) {
  const entries = await client
    .getEntries({
      content_type: id,
    })
    .then((data) => data.items)
    .catch((err) => {
      throw err;
    });

  return entries;
}
