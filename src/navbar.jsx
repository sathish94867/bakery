import React from "react";
import { Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import { createPortal } from "react-dom"; // For rendering dropdown outside the container
import "bootstrap/dist/css/bootstrap.min.css";

// Define categories with more items added
const categories = [
    {
        title: "Cakes",
        img: "/images/cake.jpeg",
        items: [
            "Decorate Cream Cake",
            "Cake Decorated Berries Cream",
            "Cherry Cake",
            "Peanut Chocolate Cake",
            "Chocolate Drip Cake Orange",
            "Kiwi Lemon Wrapped Cake",
            "Strawberry Cake",
            "Black Forest",
            "Ice Cream Cake",
        ],
    },
    {
        title: "Savory",
        img: "/images/savory.jpeg",
        items: [
            "Spicy Spell Snack",
            "Aloo Pakara",
            "Cashew Murukku",
            "Honey Roasted Brownies",
            "Masala Peanuts",
            "Picochudo",
            "Potato Chips",
            "Sakarpala",
            "Red Chips",
            "Pita Chips with Hummus",
        ],
    },
    {
        title: "Cookies",
        img: "/images/cookie.jpeg",
        items: [
            "Anthony Espinosa",
            "Brooke Lark",
            "Cleo Starcuzza",
            "Diana Light",
            "Jodie Morgan",
            "Kiko Camaclang",
            "Taylor Kiser",
            "Tetiana Bykovets",
            "Usmani Biscut",
            "Dark Fantasy",
        ],
    },
    {
        title: "Candy",
        img: "/images/candy.jpeg",
        items: [
            "Covered Dried Fruit",
            "Colorful Candies",
            "Dusted Chocolate",
            "Strawberry Candy",
            "Jelly Gummies",
            "TikTok Candy Salad",
            "Sweet Tooth",
            "Mayceys Mega Candy",
            "Lollipops",
            "Gummy Bears",
        ],
    },
    {
        title: "Drinks",
        img: "/images/drniks.jpeg",
        items: [
            "Coca-Cola (Coke)",
            "Sprite",
            "Mountain Dew",
            "Pepsi",
            "Mazza",
            "Bovonto",
            "Mirinda",
            "Limca",
            "7up",
            "Fanta",
        ],
    },
    {
        title: "Juice",
        img: "/images/juice.jpeg",
        items: [
            "Blueberry Juice",
            "Apple Juice",
            "Watermelon Juice",
            "Grapefruit Juice",
            "ABC Juice",
            "Sunrise Blend",
            "Wheatgrass Juice",
            "Ginger Lemon Shot",
            "Graphes Juice",
            "Fruit Mixture",
        ],
    },
    {
        title: "Bread",
        img: "/images/bread.jpeg",
        items: [
            "Flavorful Loaf Bread",
            "Sweet Dessert Bread",
            "Classic Christmas Tree Bread",
            "Moist Cherry Bread",
            "Sweet Potato Bread",
            "Pizza Monkey Bread",
            "Pineapple Jam",
            "Cherry Jam",
            "Ciabetta",
            "Brown Bread",
        ],
    },
    {
        title: "Snacks",
        img: "/images/mixture.jpeg",
        items: [
            "Beetroot Cutlet",
            "Cheese Bread Omlet",
            "Chessy GarlicRolls",
            "Crispy Honey Mozzarella",
            "Crispy Chicken",
            "Mini Savory Magic Rolls",
            "Rajma Kebab",
            "Cottage Cheese Toast",
            "Crispy Corn",
            "Massala Peanuts",
        ],
    },
    {
        title: "Sweets",
        img: "/images/gulabjam.jpeg",
        items: [
            "Gulab Jamun",
            "Rasgulla",
            "Mysore Pak",
            "Halwa (Carrot, Badam)",
            "Kaju Katli",
            "Peda (Doodh Peda, Malai Peda)",
            "Ladoo (Besan, Boondi)",
            "Barfi (Coconut, Badam)",
            "Jalebi",
            "Kalakand",
        ],
    },
    {
        title: "Dessert",
        img: "/images/dessert.jpeg",
        items: [
            "Donuts",
            "Caramel Pudding",
            "Rice Pudding (Kheer)",
            "Fruit Custard",
            "Nut Clusters",
            "Peanut Butter Cups",
            "Chocolate Mousse",
            "Lemon Posset",
            "Fruit Custard",
            "Marshmallow Treats",
        ],
    },
    {
        title: "Ice Cream",
        img: "/images/ice.jpeg",
        items: [
            "Kulfi (Malai, Pista, Kesar)",
            "Vanilla",
            "Strawberry",
            "Chocolate",
            "French Vanilla",
            "Butterscotch",
            "Charcoal Ice Cream",
            "Lavender Honey",
            "Paan Ice Cream",
            "Red Velvet",
        ],
    },
    {
        title: "Fast Food",
        img: "/images/fastfood.jpeg",
        items: [
            "French Fries",
            "Onion Rings",
            "Paneer Tikka Pizza",
            "Paani Poori",
            "Veg & Chicken Burger",
            "Popcorn Chicken",
            "Fried Chicken (Crispy/Spicy)",
            "Pepperoni Pizza",
            "Popcorn Chicken",
            "Honey Garlic Wings",
        ],
    },
];

const HorizontalNavbar = () => {
    return (
        <Container fluid style={{ padding: "16px", backgroundColor: "#641430" }}>
            <Row
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    overflowY: "hidden", // Hide vertical scrollbar
                    msOverflowStyle: "none", // For IE/Edge
                    scrollbarWidth: "none", // For Firefox
                }}
            >
                {categories.map((category, index) => (
                    <Col
                        key={index}
                        style={{
                            textAlign: "center",
                            margin: "0 8px",
                            minWidth: "100px",
                            position: "relative",
                        }}
                    >
                        <Dropdown drop="down" autoClose="outside">
                            <Dropdown.Toggle
                                variant="link"
                                id={`dropdown-${index}`}
                                className="dropdown-toggle-custom"
                                style={{
                                    padding: 0,
                                    background: "none",
                                    border: "none",
                                    textAlign: "center",
                                    position: "relative",
                                    zIndex: 1,
                                    textDecoration: "none", // Remove underline from category
                                }}
                            >
                                <Image
                                    src={category.img}
                                    alt={category.title}
                                    roundedCircle
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        border: "1px solid #6c757d",
                                        transition: "all 0.3s ease",
                                    }}
                                    className="img-hover"
                                />
                                <div
                                    style={{
                                        marginTop: "8px",
                                        color: "#fff",
                                        fontWeight:"bolder",
                                        fontSize: "14px",
                                        transition: "all 0.3s ease",
                                    }}
                                    className="category-title"
                                >
                                    {category.title}
                                </div>
                            </Dropdown.Toggle>

                            {createPortal(
                                <Dropdown.Menu
                                    className="animated-dropdown"
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        right: 0,
                                        zIndex: 1050,
                                        opacity: 1,
                                        transform: "translateY(0)",
                                        pointerEvents: "auto",
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                >
                                    {category.items.map((item, itemIndex) => (
                                        <Dropdown.Item
                                            key={itemIndex}
                                            href="#"
                                            className="dropdown-item-custom"
                                            style={{
                                                opacity: 1,
                                                transform: "translateX(0)",
                                                transition: "all 0.3s ease-in-out",
                                            }}
                                        >
                                            {item}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>,
                                document.body
                            )}
                        </Dropdown>
                    </Col>
                ))}
            </Row>

            {/* Internal CSS */}
            <style>
                {`
                    /* Active Category */
                    .dropdown-toggle-custom.active .dropdown-toggle {
                        color: #ffd700;
                        font-weight: bold;
                    }

                    /* Hover Effects for Image */
                    .img-hover:hover {
                        transform: scale(1.1);
                        transition: transform 0.3s ease;
                    }

                    /* Hover Effect for Title */
                    .category-title:hover {
                        color:rgb(134, 237, 50);
                        transition: color 0.3s ease;
                    }

                    /* Animated Dropdown */
                    .animated-dropdown .dropdown-menu {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                        pointer-events: auto;
                    }

                    /* Dropdown Item Animation */
                    .dropdown-item-custom {
                        opacity: 0;
                        transform: translateX(-20px);
                        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
                    }

                    .animated-dropdown .dropdown-menu.show .dropdown-item-custom {
                        opacity: 1;
                        transform: translateX(0);
                    }

                    /* Dropdown Hover Effects */
                    .dropdown-item-custom:hover {
                        background-color: #ffe5b4;
                        color: #000;
                        transition: background-color 0.3s ease, color 0.3s ease;
                    }

                    /* Ensure the Dropdown Menu is below the Navbar */
                    .dropdown-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        z-index: 1050;
                    }

                    /* Remove the underline of category titles */
                    .dropdown-toggle-custom {
                        text-decoration: none !important; /* Remove underline */
                    }

                    /* Change the dropdown icon color */
                    .dropdown-toggle::after {
                        color: #ffd700 !important; /* Change icon color */
                    }

                    /* Responsive Navbar */
                    @media (max-width: 768px) {
                        .dropdown-toggle-custom {
                            font-size: 12px;
                        }

                        .dropdown-item-custom {
                            font-size: 14px;
                        }
                    }
                `}
            </style>
        </Container>
    );
};

export default HorizontalNavbar;