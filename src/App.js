import Header from "./component/header";
import Hero from "./component/hero";

import Clients from "./component/clients";
import Features from "./component/features";
import Pricing from "./component/pricing";
import Footer from "./component/footer";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
