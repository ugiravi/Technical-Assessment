// frontend/pages/index.js
import Link from 'next/link';
import TodoList from '../components/TodoList';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link href="/about">Go to About</Link>
    <TodoList />
  </div>
);

export default Home;

// frontend/pages/about.js
import Link from 'next/link';

const About = () => (
  <div>
    <h1>About Page</h1>
    <Link href="/">Go to Home</Link>
  </div>
);

export default About;
