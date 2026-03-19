import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SecondChance() {
  const whatsappLink = "https://wa.me/254721923758";

  const products = [
    {
      name: "Sequin Navy Blue Handbag",
      price: "7,500 KES",
      image: "/images/bag1.jpg",
      tag: "Luxury",
      sold: false,
    },
    {
      name: "Mexican Black Leather Tote",
      price: "6,000 KES",
      image: "/images/bag2.jpg",
      tag: "Only 1 left",
      sold: false,
    },
    {
      name: "Burberry Quilted Bag",
      price: "6,500 KES",
      image: "/images/bag3.jpg",
      tag: "Trending",
      sold: false,
    },
    {
      name: "FION Shoulder Bag",
      price: "4,000 KES",
      image: "/images/bag4.jpg",
      tag: "Deal",
      sold: false,
    },
    {
      name: "Bulgari Inspired Bag",
      price: "7,000 KES",
      image: "/images/bag5.jpg",
      tag: "Premium",
      sold: false,
    },
    {
      name: "LV Inspired Crossbody",
      price: "6,000 KES",
      image: "/images/bag6.jpg",
      tag: "Hot",
      sold: false,
    },
    {
      name: "Black Leather Handbag",
      price: "6,000 KES",
      image: "/images/bag7.jpg",
      tag: "Classic",
      sold: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 text-center">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SECOND CHANCE
        </motion.h1>
        <p className="text-gray-300 text-lg">
          Luxury Second-Hand • Limited Pieces • Nairobi
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 my-8 flex-wrap">
        <Button variant="outline">Handbags</Button>
        <Button variant="outline">Shoes</Button>
        <Button variant="outline">Accessories</Button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden relative">
              {product.sold && (
                <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-sm rounded-full z-10">
                  SOLD OUT
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <CardContent className="p-5">
                <div className="text-xs text-gray-500 mb-1 uppercase">
                  {product.tag}
                </div>
                <h2 className="text-lg font-semibold mb-2">
                  {product.name}
                </h2>
                <p className="text-black font-bold mb-4">
                  {product.price}
                </p>

                {!product.sold ? (
                  <a href={whatsappLink} target="_blank">
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      Buy Now
                    </Button>
                  </a>
                ) : (
                  <Button disabled className="w-full">
                    Sold Out
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Instagram Section */}
      <div className="text-center mt-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Follow us</h2>
        <p className="text-gray-600 mb-4">
          @jane.glser — New drops weekly 🔥
        </p>
      </div>

      {/* Footer */}
      <div className="bg-black text-white text-center py-6 mt-12">
        <p>© 2026 Second Chance</p>
        <p className="text-gray-400 text-sm">
          WhatsApp: +254 721 923758
        </p>
      </div>
    </div>
  );
}
