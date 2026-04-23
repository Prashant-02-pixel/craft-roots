import { Layout } from "@/components/craft/Layout";
import { useState } from "react";
import { Upload, Plus, Check } from "lucide-react";

const ArtisanPortal = () => {
  const [submitted, setSubmitted] = useState(false);
  const [slots, setSlots] = useState<string[]>(["09:00 — 12:00"]);

  return (
    <Layout>
      <section className="container pt-16 md:pt-24 pb-12 grid md:grid-cols-12 gap-10">
        <p className="eyebrow md:col-span-3">For Artisans</p>
        <div className="md:col-span-8">
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">Open your workshop <em className="font-light">to the world.</em></h1>
          <p className="mt-6 text-ink-soft max-w-xl">Tell us about your craft. We'll handle the bookings, the photographs, and the small details — so you can focus on the work.</p>
        </div>
      </section>

      {submitted ? (
        <section className="container py-24 max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-moss/15 text-moss flex items-center justify-center mx-auto"><Check /></div>
          <h2 className="font-display text-4xl mt-8">Submission received.</h2>
          <p className="text-ink-soft mt-3">A member of our team will visit you within a week.</p>
        </section>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="container pb-32 grid md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-8 md:col-start-3 space-y-12">
            <Field label="Workshop Name" placeholder="e.g. Ramlal's Pottery" />
            <Field label="Your Craft" placeholder="Pottery, woodwork, weaving…" />
            <Field label="Your City" placeholder="Jaipur, Bengaluru, Pondicherry…" />
            <div>
              <label className="eyebrow block mb-3">Your Story</label>
              <textarea rows={5} placeholder="Tell us about your craft, your family, your years at the wheel…" className="w-full bg-transparent border-b border-border focus:border-clay outline-none py-2 font-display text-2xl placeholder:text-ink-whisper resize-none" />
            </div>

            <div>
              <label className="eyebrow block mb-3">Workshop Photos</label>
              <div className="border-2 border-dashed border-border p-12 text-center text-ink-soft hover:border-clay hover:text-clay transition cursor-pointer">
                <Upload className="mx-auto mb-3" />
                <p className="font-display text-xl">Drop images here</p>
                <p className="text-xs mt-1">JPEG, PNG · up to 10 photos</p>
              </div>
            </div>

            <div>
              <label className="eyebrow block mb-3">Time Slots (3-hour sessions)</label>
              <div className="space-y-2">
                {slots.map((s, i) => (
                  <input
                    key={i}
                    value={s}
                    onChange={(e) => setSlots(slots.map((v, idx) => idx === i ? e.target.value : v))}
                    className="w-full bg-transparent border border-border focus:border-clay outline-none px-4 py-3 text-sm"
                  />
                ))}
                <button type="button" onClick={() => setSlots([...slots, ""])} className="flex items-center gap-2 text-clay text-sm mt-3">
                  <Plus size={14} /> Add another slot
                </button>
              </div>
            </div>

            <Field label="Price per person (₹)" placeholder="1800" type="number" />

            <button type="submit" className="bg-ink text-background px-10 py-4 text-sm tracking-widest uppercase hover:bg-clay transition-colors">
              Submit Workshop
            </button>
          </div>
        </form>
      )}
    </Layout>
  );
};

const Field = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="eyebrow block mb-3">{label}</label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-border focus:border-clay outline-none py-2 font-display text-2xl placeholder:text-ink-whisper"
    />
  </div>
);

export default ArtisanPortal;
