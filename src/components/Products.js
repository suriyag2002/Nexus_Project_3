import React from 'react';
import './Products.css';

const Products = () => (
  <div className="product-container">
  <div className="left-side">
    <h2 className="section-heading">Website Design and Development</h2>
    <p className="section-description">
      Our experienced team of designers crafts custom web designs that reflect your brand identity and resonate with your target customers. We prioritize user experience, ensuring seamless navigation and responsiveness across all devices, from desktops to mobiles.
    </p>

    <h3 className="subsection-heading">Website Development & Design</h3>
    <p className="subsection-description">
      We specialize in crafting user-friendly websites that cater to businesses of all sizes.
    </p>
    <p className="price-tag">We create eye-catching websites for just Rs. 6999/-</p>
    <p className="additional-info">
      Our websites are not only visually stunning but also interactive and responsive. Whether you’re running a personal blog, an online store, managing a corporate entity, or need a custom web application, we’ve got you covered with our all-in-one solution. Whether your goal is to engage visitors or showcase products, we’ve got the expertise to make your website shine.
    </p>
    
  </div>

  <div className="right-side">
    <h3 className="subsection-heading">Ecommerce Solutions</h3>
    <p className="subsection-description">
      Take your online store to the next level with our comprehensive ecommerce solutions.
    </p>

    <h3 className="subsection-heading">Website Maintenance</h3>
    <p className="subsection-description">
      Our website maintenance services ensure that your website remains up-to-date and secure.
    </p>

    <h3 className="subsection-heading">Website Revamp</h3>
    <p className="subsection-description">
      Our website revamp services are designed to breathe new life into outdated websites.
    </p>

    <div className="features-list">
      <h3>UI / UX DESIGN</h3>
      <h3>USER FRIENDLY</h3>
      <h3>RESPONSIVENESS</h3>
    </div>
  </div>
</div>
);

export default Products;
