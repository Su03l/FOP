import React from "react";
import "./News.css";

const News: React.FC = () => {
  const newsItems = [
    {
      title: "New Helmet Color Range Launched",
      date: "September 2025",
      image: "https://via.placeholder.com/400x250/news1",
      excerpt:
        "FOP is excited to announce the launch of a new vibrant color range for our popular FOP–H100 series helmets...",
    },
    {
      title: "FOP Achieves ISO 9001:2015 Certification",
      date: "August 2025",
      image: "https://via.placeholder.com/400x250/news2",
      excerpt:
        "We are proud to announce that FOP has been awarded the ISO 9001:2015 certification for our quality management system...",
    },
    {
      title: "Partnership with Major Construction Firm in Riyadh",
      date: "July 2025",
      image: "https://via.placeholder.com/400x250/news3",
      excerpt:
        "FOP has entered into a strategic partnership to supply safety helmets for one of the largest new construction projects in Riyadh...",
    },
  ];

  return (
    <div className="news-page">
      <div className="container">
        <div className="page-header">
          <h1>News & Updates</h1>
        </div>
        <div className="news-section">
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div key={index} className="news-card">
                <img src={item.image} alt={item.title} className="news-image" />
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
