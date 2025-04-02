import { useState } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Chocolate Cake", price: 15, quantity: 1 },
    { id: 2, name: "Strawberry Pastry", price: 7, quantity: 2 }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        transition: "all 0.3s ease-in-out"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#c16c0c",
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold"
        }}
      >
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888", fontSize: "16px" }}>
          Your cart is empty.
        </p>
      ) : (<h1>yourcart</h1>
        // <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        //   {cartItems.map((item) => (
        //     <div
        //       key={item.id}
        //       style={{
        //         display: "flex",
        //         justifyContent: "space-between",
        //         alignItems: "center",
        //         padding: "12px",
        //         border: "1px solid #ddd",
        //         borderRadius: "8px",
        //         background: "#fafafa",
        //         transition: "all 0.3s ease-in-out",
        //         cursor: "pointer"
        //       }}
        //       onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
        //       onMouseLeave={(e) => (e.currentTarget.style.background = "#fafafa")}
        //     >
        //       <p style={{ fontWeight: "bold", fontSize: "16px" }}>{item.name}</p>
        //       <p style={{ color: "#555", fontSize: "14px" }}>
        //         ${item.price} x {item.quantity}
        //       </p>
        //       <button
        //         onClick={() => removeItem(item.id)}
        //         style={{
        //           background: "transparent",
        //           border: "none",
        //           cursor: "pointer",
        //           color: "red",
        //           transition: "color 0.3s ease-in-out"
        //         }}
        //         onMouseEnter={(e) => (e.currentTarget.style.color = "darkred")}
        //         onMouseLeave={(e) => (e.currentTarget.style.color = "red")}
        //       >
        //         <Trash2 size={20} />
        //       </button>
        //     </div>
        //   ))}
        // </div>
      )}
    </div>
  );
}
