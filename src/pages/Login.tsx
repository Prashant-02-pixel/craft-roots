import { Layout } from "@/components/craft/Layout";
import { images } from "@/data/experiences";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Login = () => (
  <Layout>
    <section className="grid md:grid-cols-2 min-h-[calc(100svh-5rem)]">
      <div className="relative hidden md:block">
        <img src={images.artisan} alt="" className="absolute inset-0 w-full h-full object-cover img-warm" />
        <div className="absolute inset-0 bg-gradient-veil" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="eyebrow text-sand mb-3">CraftRoots</p>
          <p className="font-display text-background text-4xl leading-tight">"To make something with the hand is to remember you have one."</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 md:p-16 bg-background">
        <div className="w-full max-w-sm">
          <p className="eyebrow mb-3">Welcome back</p>
          <h1 className="font-display text-5xl leading-tight">Step inside <em className="font-light">the workshop.</em></h1>

          <div className="mt-10 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-border py-3.5 text-sm hover:border-clay hover:text-clay transition">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 11v3.2h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.5 14.6 2.5 12 2.5 6.8 2.5 2.5 6.7 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.5H12z"/></svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-border py-3.5 text-sm hover:border-clay hover:text-clay transition">
              <Mail size={16} /> Continue with Email
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-border py-3.5 text-sm hover:border-clay hover:text-clay transition">
              <Phone size={16} /> Continue with Phone
            </button>
          </div>

          <p className="text-xs text-ink-whisper mt-8 leading-relaxed">By continuing you agree to our <Link to="#" className="underline">terms</Link> and our promise to keep things slow and quiet.</p>

          <p className="mt-12 text-sm text-ink-soft">Are you an artisan? <Link to="/artisan-portal" className="text-clay underline-offset-4 hover:underline">List your workshop →</Link></p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Login;
