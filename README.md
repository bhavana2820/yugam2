# Yugam Organics — Premium Organic Farm & Products

Yugam Organics is a modern, responsive static web application showcasing premium organic farm products from Tamil Nadu, India. The application features a clean, responsive layout, dynamic category filtering, a detailed quick-view overlay, and an inline Content Management System (CMS) / Admin Panel that allows real-time website personalization.

---

## 🌟 Key Features

*   **Responsive Web Design**: Fluid layout grid optimized across mobile viewports, tablets, and large desktop screens.
*   **Dynamic Product Catalog**: Clean category filtering (Organic Rice, Millets, Pulses, Spices, Oils) with smooth dynamic state transitions.
*   **Quick View Details Modal**: Real-time product description overlays.
*   **Fully Functional CMS Admin Panel**:
    *   Accessed securely via the "Admin Console" link in the footer.
    *   Password-protected dashboard control panel (`admin123`).
    *   Tabbed dashboard for managing texts, badge labels, CTAs, and address listings.
    *   **Image Sourcing & Uploads**: Supports direct uploads of local images for both the Hero visual and custom Product cards, storing them as Base64 strings directly in the browser state.
    *   **Product CRUD Manager**: Add, Edit, or Delete product card structures dynamically.
*   **Form Validation**: Client-side contact validation checking phone digit counts, email schemas, and input flags.

---

## 🚀 Local Setup & Run

1.  **Clone or Download**:
    Download the directory contents to your computer.
2.  **Run Locally**:
    Open the [index.html](index.html) file directly in any modern browser (Chrome, Edge, Safari, Firefox).
3.  **Access Admin Panel**:
    *   Scroll to the bottom of the page (footer area).
    *   Click **Admin Console**.
    *   Log in with the default password: **`admin123`**.
    *   Modify settings, upload images, save, and see changes reflect on the page instantly!

---

## 🛠️ Technology Stack

*   **Core Structure**: HTML5 Semantic Markup
*   **Design & Styling**: Vanilla CSS Grid & Flexbox layouts
*   **Logic & Dynamic State**: Vanilla JavaScript (ES6+ modular closures)
*   **Data Persistence**: Browser `localStorage` API (completely client-side)
