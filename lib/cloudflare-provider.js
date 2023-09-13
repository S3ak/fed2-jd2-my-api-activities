// Docs: https://developers.cloudflare.com/images/url-format
// https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${params.join(",")}/

export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, "format=auto"];
  return `${src}`;
}
