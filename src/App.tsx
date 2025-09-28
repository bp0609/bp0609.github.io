import { useTheme } from '@/hooks';
import { Layout, Hero, About, Projects, Skills, Experience, Contact } from '@/components';

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
