import { c as client } from "../../../../chunks/sanityClient.js";
import { w as writable } from "../../../../chunks/index.js";
let fetched = writable({ categories: null });
let data;
fetched.subscribe((value) => {
  data = value;
});
async function fetch() {
  const categories = await client.fetch(`*[_type == "category"] {
            ...,
            "count": count(*[_type == "blog" && references(^._id)])
        }
	`);
  if (categories) {
    data = { categories };
    fetched.set({ categories });
    return {
      categories
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
async function load({ params }) {
  if (!data.categories) {
    return await fetch();
  } else {
    return data;
  }
}
export {
  load
};
