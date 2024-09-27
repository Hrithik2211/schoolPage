import React, { useState, useEffect } from 'react';
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'
import person4 from '../assets/person4.jpg'
const testimonials = [
  {
    name: 'Rakesh Sharma',
    location: 'Faridabad',
    image: person1, 
    text: 'A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning.',
  },
  {
    name: 'Varun Kasyap',
    location: 'Uttar Pradesh',
    image: person2, 
    text: 'School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!',
  },
  {
    name: 'Vishal Kumar',
    location: 'Delhi',
    image: person3, 
    text: '"My daughter used to despise math, but now she can confidently take math tests." She\'s become enamoured with math, which is fantastic!" Thank You School Aura for your tremendous support.',
  },
  {
    name: 'Ravi Kaushal',
    location: 'Madhya Pradesh',
    image: person4, 
    text: 'Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer."',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    if (sliding) {
      const timer = setTimeout(() => setSliding(false), 500);
      return () => clearTimeout(timer);
    }
  }, [sliding]);

  const nextSlide = () => {
    setDirection('right');
    setSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setSliding(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="text-gray-900">PARENT </span>
        <span className="text-red-500">FEEDBACK</span>
      </h2>
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-12 py-8">
          {' '}
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              sliding
                ? direction === 'right'
                  ? '-translate-x-full'
                  : 'translate-x-full'
                : 'translate-x-0'
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-red-500">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
            <p className="text-gray-600">{testimonials[currentIndex].text}</p>
          </div>
        </div>


        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300 focus:outline-none"
          disabled={sliding}
        >
          →
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
