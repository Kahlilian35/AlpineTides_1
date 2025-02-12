import React, { useState } from "react";
import { Sparkles, Mountain, Waves, Gem, ShoppingBag } from "lucide-react";

const AlpineTidesJewelry = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const renderTabIcon = (id) => {
    switch (id) {
      case "featured":
        return <Sparkles className="h-8 w-8 text-blue-600" />;
      case "rings":
        return <Mountain className="h-8 w-8 text-blue-600" />;
      case "necklaces":
        return <Waves className="h-8 w-8 text-blue-600" />;
      case "earrings":
        return <Gem className="h-8 w-8 text-blue-600" />;
      default:
        return null;
    }
  };

  const tabs = [
    { id: "featured", title: "Featured Collection" },
    { id: "rings", title: "Mountain Rings" },
    { id: "necklaces", title: "Ocean Inspired Pendants" },
    { id: "earrings", title: "Gemstone Earrings" },
  ];

  const products = {
    featured: [
      {
        id: "f1",
        name: "Pikes Peak Inspiration Ring",
        price: 75,
        description:
          "Crafted while watching the sunrise over Pikes Peak - a reminder of Colorado's majestic mornings",
        image: "/api/placeholder/300/300",
        tag: "Bestseller",
      },
      {
        id: "f2",
        name: "Mountain Stream Earrings",
        price: 65,
        description: "Inspired by the crystal-clear streams of the Rockies",
        image: "/api/placeholder/300/300",
        tag: "New Design",
      },
    ],
    rings: [
      {
        id: "r1",
        name: "Alpine Ridge Ring",
        price: 85,
        description:
          "A delicate ridge line wraps around your finger, just like our beloved Rockies",
        image: "/api/placeholder/300/300",
        tag: "One-of-a-Kind",
      },
      {
        id: "r2",
        name: "Aspen Leaf Band",
        price: 95,
        description:
          "Textured like autumn aspen leaves catching mountain light",
        image: "/api/placeholder/300/300",
        tag: "Limited Edition",
      },
    ],
    necklaces: [
      {
        id: "n1",
        name: "Mountain Lake Pendant",
        price: 110,
        description:
          "Turquoise as blue as our alpine lakes, set in sterling silver",
        image: "/api/placeholder/300/300",
        tag: "Handcrafted",
      },
      {
        id: "n2",
        name: "Cascade Necklace",
        price: 125,
        description:
          "Inspired by the flowing waterfalls of the Colorado mountains",
        image: "/api/placeholder/300/300",
        tag: "New Arrival",
      },
    ],
    earrings: [
      {
        id: "e1",
        name: "Rocky Mountain Drops",
        price: 70,
        description:
          "Dangle earrings that catch light like morning dew on pine needles",
        image: "/api/placeholder/300/300",
        tag: "Bestseller",
      },
      {
        id: "e2",
        name: "Alpine Studs",
        price: 60,
        description: "Simple and elegant, like fresh mountain snow",
        image: "/api/placeholder/300/300",
        tag: "Classic",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="flex justify-center items-center gap-8 mb-12">
          <Waves className="h-12 w-12 text-blue-600" />
          <h1 className="text-6xl font-serif text-navy-900">
            Alpine Tides Jewelry
          </h1>
          <Mountain className="h-12 w-12 text-blue-600" />
        </div>

        <p className="text-center text-xl text-blue-600 italic font-serif max-w-3xl mx-auto leading-relaxed">
          "From my studio in Colorado, I craft pieces that blend the majesty of
          the Rockies with the endless flow of ocean tides. Each piece carries a
          story of nature's beauty."
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-4 gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-blue-50 shadow-lg"
                    : "hover:bg-blue-50"
                }`}
            >
              {renderTabIcon(tab.id)}
              <span
                className={`mt-4 font-serif text-lg text-center
                ${activeTab === tab.id ? "text-blue-900" : "text-blue-600"}`}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Collection Title */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-serif text-blue-900 mb-6">
          {tabs.find((tab) => tab.id === activeTab)?.title}
        </h2>
        <p className="text-xl text-blue-600 italic">
          {activeTab === "featured" &&
            "Pieces that capture the essence of Colorado's natural beauty"}
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products[activeTab].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-blue-600 font-serif">
                    {product.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-blue-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-serif mb-6">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif text-blue-900">
                    ${product.price}
                  </span>
                  <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ShoppingBag className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlpineTidesJewelry;
