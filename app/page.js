export default function Home() {
  const products = [
    { name: "Sequin Navy Blue Handbag", price: "7,500 KES", image: "/images/bag1.jpg" },
    { name: "Mexican Black Leather Tote", price: "6,000 KES", image: "/images/bag2.jpg" },
    { name: "Burberry Quilted Bag", price: "6,500 KES", image: "/images/bag3.jpg" },
    { name: "FION Shoulder Bag", price: "4,000 KES", image: "/images/bag4.jpg" },
    { name: "Bulgari Inspired Bag", price: "7,000 KES", image: "/images/bag5.jpg" },
    { name: "LV Inspired Crossbody", price: "6,000 KES", image: "/images/bag6.jpg" },
    { name: "Black Leather Handbag", price: "6,000 KES", image: "/images/bag7.jpg" },
  ];

  const whatsapp = "https://wa.me/254721923758";

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", textAlign: "center" }}>
      <h1>Second Chance 👜</h1>
      <p>Luxury Second-Hand • Limited Pieces</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {products.map((p, i) => (
          <div key={i} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "10px" }}>
            <img src={p.image} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <a href={whatsapp} target=\"_blank\">
              <button style={{ padding: "10px", background: "black", color: "white", border: "none" }}>
                Buy on WhatsApp
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
