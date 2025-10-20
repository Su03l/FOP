import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./News.css";

const News: React.FC = () => {
  const { translate } = useLanguage();

  const newsItems = [
    {
      title: translate("news1Title"),
      date: translate("news1Date"),
      image: "https://via.placeholder.com/400x250/news1",
      excerpt: translate("news1Short"),
      readMore: translate("news1ReadMore"),
    },
    {
      title: translate("news2Title"),
      date: translate("news2Date"),
      image: "https://via.placeholder.com/400x250/news2",
      excerpt: translate("news2Short"),
      readMore: translate("news2ReadMore"),
    },
    {
      title: translate("news3Title"),
      date: translate("news3Date"),
      image: "https://via.placeholder.com/400x250/news3",
      excerpt: translate("news3Short"),
      readMore: translate("news3ReadMore"),
    },
  ];

  return (
    <div className="news-page">
      <div className="container">
        <div className="page-header">
          <h1>{translate("newsTitle")}</h1>
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
                    {item.readMore}
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
