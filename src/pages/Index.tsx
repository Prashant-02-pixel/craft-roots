import { Link } from "react-router-dom";
import { Layout } from "@/components/craft/Layout";
import { experiences, images, cityCultures } from "@/data/experiences";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import { useLocation as useAppLocation } from "@/context/LocationContext";
import { SearchBar } from "@/components/craft/SearchBar";
import { LocationPicker } from "@/components/craft/LocationPicker";
import { useMemo } from "react";

const Index = () => {
  const { city, source } = useAppLocation();

  const nearby = useMemo(() => experiences.filter((e) => e.city === city), [city]);
  const popular = useMemo(() => {
    const list = nearby.length ? nearby : experiences;
    return list.slice(0, 3);
  }, [nearby]);
  const weekend = useMemo(() => experiences.filter((e) => e.tags?.includes("Weekend")).slice(0, 4), []);
  const featured = experiences.slice(0, 3);

  return (
    <Layout transparentHeader>
      {/* HERO — Split Layout */}
      <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
        <img
          src={images.potteryImg}
          alt="Hands shaping wet clay on a pottery wheel"
          className="absolute inset-0 w-full h-full object-cover img-warm ken-burns"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30" />
        <div className="absolute inset-0 grain opacity-30" />

        <div className="relative h-full container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-20 md:pt-24 pb-12 md:pb-16">
          {/* LEFT — Storytelling */}
          <div className="flex flex-col gap-5 md:gap-6 text-left">
            <p className="eyebrow text-sand/90 reveal-left reveal-delay-1">
              CraftRoots — Est. in Earth
            </p>
            <h1 className="font-display text-background text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.8rem] leading-[1.05] reveal-left reveal-delay-2">
              Experience India<br />
              <em className="font-light">Through Its</em> Artisans.
            </h1>
            <p className="text-background/80 max-w-lg text-base md:text-lg leading-relaxed reveal-left reveal-delay-3">
              Three quiet hours at the wheel, the lathe, the loom — with the
              hands that have kept India's crafts alive for generations.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-1 reveal-left reveal-delay-4">
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2.5 bg-clay text-background px-6 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-clay/90 transition-colors shadow-lift"
              >
                Explore workshops
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/story"
                className="inline-flex items-center gap-2.5 bg-background/15 backdrop-blur-sm text-background border border-background/30 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-background/25 transition-colors"
              >
                Our story
              </Link>
            </div>
          </div>

          {/* RIGHT — Discovery Card */}
          <div className="flex justify-center lg:justify-end w-full reveal-up float-slow">
            <div className="w-full max-w-[420px] card-glass rounded-2xl p-6 md:p-7 shadow-lift">
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-full bg-clay/10 flex items-center justify-center">
                  <Compass size={15} className="text-clay" />
                </div>
                <div>
                  <p className="text-ink font-medium text-sm">Discover experiences</p>
                  <p className="text-ink-whisper text-xs">Handpicked artisan workshops</p>
                </div>
              </div>

              {/* Search */}
              <SearchBar variant="hero" />

              {/* Quick cities */}
              <div className="mt-5">
                <p className="text-[0.65rem] uppercase tracking-[0.15em] text-ink-whisper mb-2.5">Popular destinations</p>
                <div className="flex flex-wrap gap-2">
                  {["Jaipur", "Goa", "Bengaluru", "Delhi"].map((c) => (
                    <Link
                      key={c}
                      to={`/experiences?city=${encodeURIComponent(c)}`}
                      className="inline-flex items-center gap-1.5 text-xs text-ink-soft bg-sand/60 hover:bg-sand hover:text-clay transition-colors px-3 py-1.5 rounded-full"
                    >
                      <MapPin size={10} />
                      {c}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mini featured */}
              <div className="mt-5 pt-5 border-t border-border/50">
                <p className="text-[0.65rem] uppercase tracking-[0.15em] text-ink-whisper mb-3">Trending now</p>
                <div className="flex gap-3">
                  {featured.slice(0, 2).map((e) => (
                    <Link
                      key={e.slug}
                      to={`/experience/${e.slug}`}
                      className="group flex-1 min-w-0"
                    >
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2">
                        <img
                          src={e.image}
                          alt={e.title}
                          className="w-full h-full object-cover img-warm transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs font-medium text-ink truncate group-hover:text-clay transition-colors">{e.title}</p>
                      <p className="text-[0.7rem] text-ink-whisper">{e.city} · ₹{e.price.toLocaleString("en-IN")}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEAR YOU */}
      <section className="container pt-20 md:pt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-3 flex items-center gap-2">
              <MapPin size={11} /> {source === "auto" ? "Auto-detected" : source === "manual" ? "Your city" : "Suggested"}
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Experiences near <em className="font-light">{city}.</em>
            </h2>
            <p className="mt-3 text-ink-soft text-sm">
              {nearby.length > 0 ? `${nearby.length} workshops a short ride away.` : `No workshops in ${city} yet — try a nearby city.`}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <LocationPicker />
            <Link to="/experiences" className="text-sm text-ink-soft hover:text-clay border-b border-border pb-1">View all →</Link>
          </div>
        </div>

        {nearby.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
            {nearby.slice(0, 3).map((e, i) => (
              <Link to={`/experience/${e.slug}`} key={e.slug} className={`group ${i === 1 ? "md:mt-12" : ""}`}>
                <div className="overflow-hidden mb-4 aspect-[4/5]">
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {e.tags?.slice(0, 2).map((t) => (
                    <span key={t} className="text-[0.6rem] uppercase tracking-widest px-2 py-0.5 bg-sand text-ink-soft">{t}</span>
                  ))}
                </div>
                <h3 className="font-display text-2xl md:text-3xl group-hover:text-clay transition-colors">{e.title}</h3>
                <div className="flex justify-between items-baseline mt-3 text-sm text-ink-soft">
                  <span>{e.duration}</span>
                  <span className="font-medium text-ink">₹{e.price.toLocaleString("en-IN")}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-sand/50 p-10 text-center">
            <p className="font-display text-2xl text-ink mb-3">Nothing in {city} yet.</p>
            <p className="text-sm text-ink-soft mb-5">Browse other cities — there's likely one nearby.</p>
            <Link to="/experiences" className="text-sm bg-ink text-background px-5 py-3 inline-block hover:bg-clay">Explore all cities</Link>
          </div>
        )}
      </section>

      {/* INTRO STRIP */}
      <section className="container py-24 md:py-36 grid md:grid-cols-12 gap-10">
        <p className="eyebrow md:col-span-3">A Quiet Manifesto</p>
        <div className="md:col-span-8">
          <p className="font-display text-3xl md:text-5xl leading-[1.15] text-ink">
            We don't sell tours. We sit beside an artisan, a kettle of tea between us,
            and let the work speak. <span className="text-ink-whisper">Three hours. One craft. A small piece of India to take home.</span>
          </p>
        </div>
      </section>

      {/* EXPLORE BY CULTURE */}
      <section className="bg-sand">
        <div className="container py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">Explore by City Culture</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                Each city, <em className="font-light">a different hand.</em>
              </h2>
            </div>
            <p className="text-ink-soft text-sm max-w-sm">
              From Goan distilleries to Delhi's textile lanes, every city carries its own craft. Choose where to wander.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {cityCultures.map((c, i) => (
              <Link key={c.city} to={`/experiences?city=${encodeURIComponent(c.city)}`} className={`group relative aspect-[4/5] overflow-hidden hover-lift ${i % 3 === 1 ? "lg:mt-10" : ""}`}>
                <img src={c.image} alt={c.city} className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-veil" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="eyebrow text-sand mb-1">{c.signature.slice(0, 2).join(" · ")}</p>
                  <h3 className="font-display text-background text-3xl md:text-4xl">{c.city}</h3>
                  <p className="text-background/80 text-xs mt-1.5 hidden md:block">{c.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES — editorial split */}
      <section className="container pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-3">The Crafts</p>
            <h2 className="font-display text-4xl md:text-6xl">Three traditions.<br /><em className="font-light">Open hands.</em></h2>
          </div>
          <Link to="/experiences" className="hidden md:inline text-sm text-ink-soft hover:text-clay border-b border-border pb-1">All experiences →</Link>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Link to="/experiences?category=Pottery" className="col-span-12 md:col-span-7 row-span-2 group relative aspect-[4/5] md:aspect-auto md:h-[640px] overflow-hidden hover-lift">
            <img src={images.potteryImg} alt="Pottery" className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-veil" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="eyebrow text-sand">01 — Earth</p>
              <h3 className="font-display text-background text-5xl md:text-7xl mt-2">Pottery</h3>
              <p className="text-background/80 text-sm mt-3 max-w-xs">Wheels that have spun for fifty years.</p>
            </div>
          </Link>

          <Link to="/experiences?category=Wooden Toys" className="col-span-12 md:col-span-5 group relative aspect-[5/4] overflow-hidden hover-lift">
            <img src={images.woodenImg} alt="Wooden Toys" className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-veil" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="eyebrow text-sand">02 — Wood</p>
              <h3 className="font-display text-background text-4xl md:text-5xl mt-2">Wooden Toys</h3>
            </div>
          </Link>

          <Link to="/experiences?category=Crochet" className="col-span-12 md:col-span-5 group relative aspect-[5/4] overflow-hidden hover-lift">
            <img src={images.crochetImg} alt="Crochet" className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-veil" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="eyebrow text-sand">03 — Yarn</p>
              <h3 className="font-display text-background text-4xl md:text-5xl mt-2">Crochet</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* OUR STORY — split editorial */}
      <section className="bg-sand">
        <div className="container py-24 md:py-36 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
              We began with one potter, <em className="font-light">one afternoon,</em> one pot we couldn't forget.
            </h2>
            <p className="mt-8 text-ink-soft leading-relaxed max-w-md">
              CraftRoots was born from a quiet realization: that the most meaningful
              way to know a country is through the hands that shape it. We work with
              over 80 master artisans across India to make their workshops gently
              accessible — without ever turning craft into spectacle.
            </p>
            <Link to="/story" className="mt-8 inline-flex items-center gap-3 text-clay border-b border-clay/40 pb-1.5 hover:border-clay">
              <span className="tracking-widest text-xs uppercase">Read more</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 grid grid-cols-2 gap-4">
            <img src={images.artisan} alt="Artisan portrait" className="w-full aspect-[3/4] object-cover img-warm" loading="lazy" />
            <img src={images.potCollection} alt="Clay vessels" className="w-full aspect-[3/4] object-cover img-warm mt-10" loading="lazy" />
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">Featured</p>
            <h2 className="font-display text-4xl md:text-6xl">Workshops <em className="font-light">to wander into.</em></h2>
          </div>
          <Link to="/experiences" className="text-sm text-ink-soft hover:text-clay border-b border-border pb-1 w-fit">View all →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-x-6 gap-y-14">
          {featured.map((e, i) => (
            <Link to={`/experience/${e.slug}`} key={e.slug} className={`group ${i === 1 ? "md:mt-16" : ""}`}>
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <p className="eyebrow mb-2">{e.category} · {e.city}</p>
              <h3 className="font-display text-2xl md:text-3xl group-hover:text-clay transition-colors">{e.title}</h3>
              <div className="flex justify-between items-baseline mt-3 text-sm text-ink-soft">
                <span>{e.duration}</span>
                <span className="font-medium text-ink">₹{e.price.toLocaleString("en-IN")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={images.clayTexture ?? images.potteryImg} alt="" className="absolute inset-0 w-full h-full object-cover img-warm" loading="lazy" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative h-full container flex items-center">
          <blockquote className="font-display italic text-background text-3xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.15]">
            "The hand has its own memory.<br />Sit with it long enough, and it begins to teach."
            <footer className="not-italic font-sans text-xs tracking-[0.3em] uppercase text-sand mt-8">— Ramlal Prajapati, Potter, Jaipur</footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
