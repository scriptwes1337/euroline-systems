import { Footer } from '../../components/footer';
import { Nav } from '../../components/navbar/navbar';

const products = [
  {
    id: 1,
    title: "Facades",
    image: "/facades.jpg",
    link: "https://www.gastaldellosistemi.it/en-us/facades.html",
  },
  {
    id: 2,
    title: "Casement Systems",
    image: "/casement-systems.jpg",
    link: "https://www.gastaldellosistemi.it/en-us/casement-systems.html",
  },
  {
    id: 3,
    title: "Sliding",
    image: "/sliding.jpg",
    link: "https://www.gastaldellosistemi.it/en-us/sliding.html",
  },
  {
    id: 4,
    title: "Sunshades",
    image: "/sunshades.jpg",
    link: "https://www.gastaldellosistemi.it/en-us/sun-shades.html",
  },
  {
    id: 5,
    title: "Shutter Systems",
    image: "/shutter-systems.jpg",
    link: "https://www.gastaldellosistemi.it/en-us/shutter-systems.html",
  },
];

const cardStyle: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: "8px",
  padding: "1rem",
  textAlign: "center",
  background: "#fafafa",
  transition: "box-shadow 0.2s, transform 0.2s",
  cursor: "pointer",
};

const ProductsPage = () => {
  return (
    <>
      <style>{`
        .product-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          transform: translateY(-4px) scale(1.03);
        }
        .product-title {
          color: #000;
        }
      `}</style>
      <Nav />
      <div style={{ padding: "2rem" }}>
        <h1>Products</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((product) => (
            <a href={product.link} key={product.id} target="_blank" rel='noreferrer'>
              <div className="product-card" style={cardStyle}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
                <h2 className="product-title" style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                  {product.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;