import Header from "./Components/Header/header";
import Flex from "./Components/Flex/flex";
import Middle from "./Components/Middle/middle";
import Footer from "./Components/Footer/footer";
import tab from "./images/illustration-editor-desktop.svg";
import phone from "./images/illustration-phones.svg";
import laptop from "./images/illustration-laptop-desktop.svg";

function App() {
  return (
    <div>
      <Header />
      <Flex
        position="right"
        image={tab}
        title="Designed for the future"
        contentTitle1="Introducing an extensible editor"
        content1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
        contentTitle2="Robust content management"
        content2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this opt functionality, you’re in full control."
      />
      <Middle
        image={phone}
        title="Designed for the future"
        contentTitle1="State of the Art Infrastructure"
        content1="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
      />
      <Flex
        position="left"
        image={laptop}
        contentTitle1="Free, open, simple"
        content1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        contentTitle2="Powerful tooling"
        content2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
      />
      <Footer />
    </div>
  );
}

export default App;
