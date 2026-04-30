import Banner from "@/components/home/Banner";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import Marquee from "@/components/home/Marquee";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Marquee />
        <FeaturedBooks />
        <Testimonials />
      </main>
    </div>
  );
}
