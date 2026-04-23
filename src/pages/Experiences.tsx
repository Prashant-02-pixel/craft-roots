import { Layout } from "@/components/craft/Layout";
import { experiences, categories, cities } from "@/data/experiences";
import { Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const Experiences = () => {
  const [params, setParams] = useSearchParams();
  const cat = params.get("category");
  const city = params.get("city");

  const list = useMemo(() => {
    return experiences.filter((e) => (!cat || e.category === cat) && (!city || e.city === city));
  }, [cat, city]);

  const setParam = (key: string, val: string | null) => {
    const next = new URLSearchParams(params);
    if (!val) next.delete(key); else next.set(key, val);
    setParams(next);
  };

  return (
    <Layout>
      <section className="container pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-4">Workshops · India</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-[1.02]">
          A small atlas of <em className="font-light">handmade afternoons.</em>
        </h1>
        <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
          {list.length} experiences across {cities.length} cities. Each one
          three quiet hours, with a master who has spent decades of them.
        </p>
      </section>

      <section className="border-y border-border bg-background/60 backdrop-blur sticky top-16 md:top-20 z-30">
        <div className="container py-4 flex flex-wrap gap-x-2 gap-y-3 items-center text-sm">
          <span className="eyebrow text-ink-whisper mr-2">Craft</span>
          <button onClick={() => setParam("category", null)} className={`px-3 py-1 rounded-full transition ${!cat ? "bg-ink text-background" : "text-ink-soft hover:text-ink"}`}>All</button>
          {categories.map((c) => (
            <button key={c} onClick={() => setParam("category", c === cat ? null : c)} className={`px-3 py-1 rounded-full transition ${cat === c ? "bg-clay text-clay-foreground" : "text-ink-soft hover:text-ink"}`}>{c}</button>
          ))}
          <span className="w-px h-5 bg-border mx-3 hidden md:block" />
          <span className="eyebrow text-ink-whisper mr-2">City</span>
          <button onClick={() => setParam("city", null)} className={`px-3 py-1 rounded-full transition ${!city ? "bg-ink text-background" : "text-ink-soft hover:text-ink"}`}>All</button>
          {cities.slice(0, 5).map((c) => (
            <button key={c} onClick={() => setParam("city", c === city ? null : c)} className={`px-3 py-1 rounded-full transition ${city === c ? "bg-moss text-moss-foreground" : "text-ink-soft hover:text-ink"}`}>{c}</button>
          ))}
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {list.map((e, i) => (
            <Link to={`/experience/${e.slug}`} key={e.slug} className={`group ${i % 3 === 1 ? "lg:mt-16" : ""} ${i % 3 === 2 ? "lg:mt-8" : ""}`}>
              <div className="overflow-hidden aspect-[4/5] mb-5">
                <img src={e.image} alt={e.title} className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <p className="eyebrow mb-2">{e.category} · {e.city}</p>
              <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-clay transition-colors">{e.title}</h3>
              <p className="text-sm text-ink-soft mt-2 line-clamp-2">{e.excerpt}</p>
              <div className="flex justify-between items-baseline mt-4 text-sm border-t border-border pt-3">
                <span className="text-ink-soft">{e.duration}</span>
                <span className="font-medium">₹{e.price.toLocaleString("en-IN")}</span>
              </div>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <p className="text-center font-display text-3xl text-ink-whisper py-24">Nothing here yet — try another filter.</p>
        )}
      </section>
    </Layout>
  );
};

export default Experiences;
