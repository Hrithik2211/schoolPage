import LoginForm from '../components/LoginForm';
import Card from '../components/Card';
import Objective from '../components/Objective';
import Benefits from '../components/Benefits';
import TestimonialCarousel from '../components/TestimonialCarousel';
import EducationalOfferings from '../components/EducationalOfferings';
import childStudy from '../assets/childStudy.jpg'


const Home = () => {
  return (
    <div>
      <section className="relative bg-red-500 text-white text-center mt-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-5xl font-bold mb-4">Be a Smart Student</h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2">
              <img
                src={childStudy}
                alt="Child studying"
                className="rounded-full shadow-lg"
              />
            </div>

            <div className="md:w-1/2">
              <LoginForm />
            </div>
          </div>

          <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              title="Online Courses"
              description="Explore various online courses."
            />
            <Card
              title="Learning Videos"
              description="Watch helpful learning videos."
            />
            <Card
              title="Expert Teachers"
              description="Get guidance from experienced teachers."
            />
            <Card
              title="Study Materials"
              description="Access comprehensive study materials."
            />
          </section>
        </div>

        <div className="wave absolute bottom-0 left-0 right-0 h-20 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,101.3C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <Objective />
      <EducationalOfferings />
      <Benefits />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;
