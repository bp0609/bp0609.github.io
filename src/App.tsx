import { useTheme } from '@/hooks/useTheme';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </Layout>
  );
}

export default App;