import React from 'react';
import './styles.css';

interface TestimonialCardProps {
  name: string;
  className: string;
  message: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, className, message, imageUrl }) => {
  return (
    <div className="testimonial-card">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}'s testimonial`} />
      </div>
      <div className="content">
        <h2>{name}</h2>
        <h3>{className}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
