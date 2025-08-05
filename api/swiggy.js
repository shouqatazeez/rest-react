export default async function handler(req, res) {
  const swiggyUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90 Safari/537.36",
        "Accept": "application/json",
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
}
