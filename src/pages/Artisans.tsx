import { Layout } from "@/components/craft/Layout";
import { experiences } from "@/data/experiences";
import { Link } from "react-router-dom";

const unique = Array.from(new Map(experiences.map((e) => [e.artisan, e])).values());

const Artisans = () => (
  <Layout>
    <section className="container pt-16 md:pt-24 pb-12">
      <p className="eyebrow mb-4">The Hands</p>
      <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-[1.02]">
        Meet the people <em className="font-light">behind the work.</em>
      </h1>
    </section>

    <section className="container pb-24">
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-24">
        {unique.map((e, i) => (
          <Link to={`/experience/${e.slug}`} key={e.artisan} className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}>
            <div className="overflow-hidden aspect-[4/5] mb-6">
              <img src={e.artisanImage ?? e.image} alt={e.artisan} className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <p className="eyebrow mb-2">{e.category} · {e.city}</p>
            <h3 className="font-display text-3xl md:text-4xl group-hover:text-clay transition-colors">{e.artisan}</h3>
            <p className="text-clay text-sm mt-1">{e.artisanYears} years at the craft</p>
            <p className="mt-4 text-ink-soft leading-relaxed line-clamp-3 max-w-md">{e.story}</p>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Artisans;
