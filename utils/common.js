import slugify from "slugify";

export const capitalize = (label) =>
  label.charAt(0).toUpperCase() + label.slice(1);

export const titleSlugify = (title) => slugify(title, { lower: true });

export const toQueryParams = (url) => {
  if (!url) return;

  try {
    return String(url)
      .split("?")[1]
      .split("&")
      .reduce((acc, token) => {
        const [key, value] = token.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});
  } catch (error) {}
  return;
};
