import { Layout } from "@/components/craft/Layout";
import { images } from "@/data/experiences";

const Story = () => (
  <Layout>
    <section className="container pt-20 md:pt-28 pb-20 grid md:grid-cols-12 gap-10">
      <p className="eyebrow md:col-span-3">Our Story</p>
      <div className="md:col-span-8">
        <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
          We began with one potter, <em className="font-light">one afternoon,</em> and a pot we couldn't forget.
        </h1>
      </div>
    </section>

    <section className="w-full aspect-[16/8] overflow-hidden">
      <img
        src={images.storyTravelers}
        alt="A traveler learning pottery from a master artisan"
        className="w-full h-full object-cover img-warm"
      />
    </section>

    <section className="container py-24 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-7 md:col-start-3 space-y-7 text-lg leading-[1.7] text-ink-soft font-display">
        <p className="text-ink"><span className="float-left font-display text-7xl leading-[0.8] mr-3 mt-1 text-clay">A</span> few years ago, on a quiet afternoon outside Jaipur, we sat with a potter named Ramlal. He didn't perform. He didn't explain. He simply turned the wheel.</p>
        <p>Three hours later, we left with a small clay cup, slightly uneven, and the strange feeling that we had been somewhere we couldn't quite name.</p>
        <p>That feeling is what CraftRoots is built on. We believe travel is most meaningful when it slows down — when it sits beside someone, watches their hands, and listens.</p>
        <p>Today we work with over 80 master artisans across India. We pay them fairly, schedule small groups, and never ask them to be anything other than themselves. Most of them have practiced their craft for thirty, forty, fifty years. We are simply the door.</p>
      </div>
    </section>

    <section className="container pb-24 grid md:grid-cols-12 gap-6 md:gap-8">
      <img src={images.storyWorkshop} alt="Travelers seated with an artisan in a sunlit courtyard" className="md:col-span-7 w-full aspect-[5/4] object-cover img-warm" loading="lazy" />
      <img src={images.artisanAnya} alt="A modern artisan beside copper stills in Goa" className="md:col-span-5 w-full aspect-[5/4] object-cover img-warm md:mt-16" loading="lazy" />
    </section>

    <section className="bg-sand py-24">
      <div className="container grid md:grid-cols-3 gap-10 text-center">
        {[
          { n: "80+", l: "Master artisans" },
          { n: "12", l: "Cities across India" },
          { n: "3,400+", l: "Travelers hosted" },
        ].map((s) => (
          <div key={s.l}>
            <p className="font-display text-7xl md:text-8xl text-clay">{s.n}</p>
            <p className="eyebrow mt-3">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Story;
