import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "@/data/experiences";
import { ArrowLeft, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Step = "choose" | "phone" | "otp";

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("choose");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [resendIn, setResendIn] = useState(0);

  useEffect(() => {
    if (resendIn <= 0) return;
    const t = setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendIn]);

  const completeAuth = (method: "google" | "phone", value: string) => {
    try {
      localStorage.setItem(
        "craftroots:user",
        JSON.stringify({ method, value, signedInAt: Date.now() })
      );
    } catch {}
    navigate("/welcome-location", { replace: true });
  };

  const handleGoogle = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    completeAuth("google", "guest@craftroots.in");
  };

  const sendOtp = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setStep("otp");
    setResendIn(30);
    toast.success(`OTP sent to +91 ${phone}`, { description: "Use 123456 to continue" });
  };

  const handleOtpChange = (i: number, v: string) => {
    const digit = v.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[i] = digit;
    setOtp(next);
    if (digit && i < 5) otpRefs.current[i + 1]?.focus();
  };

  const handleOtpKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus();
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    e.preventDefault();
    const next = pasted.split("").concat(Array(6).fill("")).slice(0, 6);
    setOtp(next);
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const verifyOtp = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) {
      toast.error("Enter the 6-digit code");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    if (code !== "123456") {
      toast.error("Invalid code", { description: "For this preview, use 123456" });
      return;
    }
    completeAuth("phone", `+91 ${phone}`);
  };

  return (
    <main className="min-h-svh grid md:grid-cols-[1.05fr_1fr] bg-sand/40">
      {/* Storytelling panel */}
      <aside className="relative hidden md:block">
        <img
          src={images.loginExperience}
          alt="A traveler shares a quiet moment with a master artisan in his workshop"
          className="absolute inset-0 w-full h-full object-cover img-warm ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-veil" />
        <div className="absolute top-10 left-10 right-10">
          <Link to="/" className="font-display text-3xl text-background tracking-tight">
            CraftRoots
          </Link>
        </div>
        <div className="absolute bottom-14 left-12 right-12">
          <p className="eyebrow text-sand mb-4">Since the soil first turned</p>
          <p className="font-display text-background text-4xl lg:text-5xl leading-[1.1]">
            "To make something with the hand is to remember <em className="font-light">you have one.</em>"
          </p>
          <p className="text-sand/80 text-sm mt-6">— A potter in Kumbharwada</p>
        </div>
      </aside>

      {/* Auth panel */}
      <section className="relative flex items-center justify-center p-6 sm:p-10 md:p-14 bg-background grain">
        <Link
          to="/"
          className="absolute top-6 left-6 text-xs text-ink-soft hover:text-ink flex items-center gap-1.5"
        >
          <ArrowLeft size={14} /> Back home
        </Link>

        <div className="w-full max-w-sm">
          {/* Logo / mark */}
          <div className="md:hidden mb-10">
            <span className="font-display text-3xl">CraftRoots</span>
          </div>

          <div className="mb-10">
            <div className="w-12 h-12 rounded-full bg-clay-soft flex items-center justify-center mb-5">
              <span className="font-display text-clay text-xl">✦</span>
            </div>
            <p className="eyebrow mb-3">
              {step === "choose" ? "Welcome" : step === "phone" ? "Phone sign-in" : "Verify"}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              {step === "choose" && (
                <>
                  Experience India through <em className="font-light">its artisans.</em>
                </>
              )}
              {step === "phone" && (
                <>
                  Enter your <em className="font-light">number.</em>
                </>
              )}
              {step === "otp" && (
                <>
                  Check your <em className="font-light">messages.</em>
                </>
              )}
            </h1>
            {step === "otp" && (
              <p className="text-sm text-ink-soft mt-3">
                We sent a 6-digit code to <span className="text-ink">+91 {phone}</span>.{" "}
                <button
                  onClick={() => setStep("phone")}
                  className="text-clay hover:underline underline-offset-4"
                >
                  Change
                </button>
              </p>
            )}
          </div>

          {step === "choose" && (
            <div className="space-y-3">
              <button
                onClick={handleGoogle}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-ink text-background py-3.5 rounded-sm text-sm hover:bg-clay transition-colors duration-300 disabled:opacity-60 shadow-[var(--shadow-soft)]"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                    <path fill="#FFFFFF" d="M21.35 11.1H12v3.2h5.35c-.5 2.4-2.6 3.8-5.35 3.8a6.1 6.1 0 1 1 0-12.2c1.5 0 2.85.55 3.9 1.45l2.4-2.4A9.5 9.5 0 1 0 12 21.5c5.5 0 9.5-3.85 9.5-9.5 0-.65-.05-1.3-.15-1.9z"/>
                  </svg>
                )}
                Continue with Google
              </button>

              <div className="flex items-center gap-3 py-2">
                <span className="flex-1 h-px bg-border" />
                <span className="text-[0.65rem] eyebrow text-ink-whisper">or</span>
                <span className="flex-1 h-px bg-border" />
              </div>

              <button
                onClick={() => setStep("phone")}
                className="w-full flex items-center justify-center gap-2.5 border border-border bg-background py-3.5 rounded-sm text-sm hover:border-clay hover:text-clay transition-colors"
              >
                <Phone size={15} /> Continue with phone number
              </button>

              <p className="text-xs text-ink-whisper pt-6 leading-relaxed">
                By continuing you agree to our{" "}
                <Link to="#" className="underline underline-offset-2">terms</Link>{" "}
                and our promise to keep things slow and quiet.
              </p>

              <p className="pt-8 text-sm text-ink-soft">
                Are you an artisan?{" "}
                <Link to="/artisan-portal" className="text-clay underline-offset-4 hover:underline">
                  List your workshop →
                </Link>
              </p>
            </div>
          )}

          {step === "phone" && (
            <form onSubmit={sendOtp} className="space-y-5">
              <div>
                <label className="block text-xs eyebrow mb-2 text-ink-soft">Mobile number</label>
                <div className="flex items-stretch border border-border rounded-sm focus-within:border-clay transition-colors bg-background overflow-hidden">
                  <span className="flex items-center px-3.5 text-sm text-ink-soft bg-sand/50 border-r border-border">
                    +91
                  </span>
                  <input
                    autoFocus
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="98765 43210"
                    className="flex-1 bg-transparent px-3.5 py-3 text-sm outline-none placeholder:text-ink-whisper tracking-wide"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || phone.length !== 10}
                className="w-full flex items-center justify-center gap-2 bg-clay text-clay-foreground py-3.5 rounded-sm text-sm hover:bg-ink transition-colors disabled:opacity-50 disabled:hover:bg-clay shadow-[var(--shadow-soft)]"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                Send OTP
              </button>

              <button
                type="button"
                onClick={() => setStep("choose")}
                className="w-full text-xs text-ink-soft hover:text-ink"
              >
                ← Other sign-in options
              </button>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={verifyOtp} className="space-y-6">
              <div className="flex gap-2 justify-between" onPaste={handleOtpPaste}>
                {otp.map((d, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    value={d}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKey(i, e)}
                    inputMode="numeric"
                    maxLength={1}
                    autoFocus={i === 0}
                    aria-label={`Digit ${i + 1}`}
                    className="w-11 h-13 sm:w-12 sm:h-14 text-center font-display text-2xl bg-background border border-border rounded-sm focus:border-clay focus:ring-2 focus:ring-clay/20 outline-none transition"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={loading || otp.join("").length !== 6}
                className="w-full flex items-center justify-center gap-2 bg-clay text-clay-foreground py-3.5 rounded-sm text-sm hover:bg-ink transition-colors disabled:opacity-50 disabled:hover:bg-clay shadow-[var(--shadow-soft)]"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                Verify & continue
              </button>

              <div className="text-center text-xs text-ink-soft">
                {resendIn > 0 ? (
                  <>Resend code in {resendIn}s</>
                ) : (
                  <button type="button" onClick={() => sendOtp()} className="text-clay hover:underline underline-offset-4">
                    Resend code
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Login;
