//https://formspree.io/f/xbgrkrwe
import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import realProperty from "@/imports/Screenshot_2026-07-31_at_11.27.01_PM.png";
import logoImg from "@/imports/ChatGPT_Image_Jul_31__2026__11_45_51_PM.png";
import {
  BookOpen, Users, Presentation, ChefHat,
  Music, Heart, X, Send, Camera, Briefcase,
  Landmark, Waves, Palette, Lock, Star, Crown, ChevronDown, ChevronUp
} from "lucide-react";

const GHAT_IMG  = "https://images.unsplash.com/photo-1740229964089-ee1400c94ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const ARCH_IMG  = "https://images.unsplash.com/photo-1665003815164-8f5bc853ef44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const DINING_IMG= "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const ROOM_IMG  = "https://images.unsplash.com/photo-1669043962136-224323f6fa1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const FOOD_IMG  = "https://images.unsplash.com/photo-1728910156510-77488f19b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

/* ─── Ornamental helpers ────────────────────────────────────── */
function OrnamentLine() {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#c9a84c]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
      <div className="w-2.5 h-2.5 rotate-45 border border-[#c9a84c]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#c9a84c]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="h-px w-10 bg-[#c9a84c]" />
      <p className="font-['Cinzel'] text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">{children}</p>
      <div className="h-px w-10 bg-[#c9a84c]" />
    </div>
  );
}

function GoldBtn({ children, onClick, outline, type = "button" }: {
  children: React.ReactNode; onClick?: () => void; outline?: boolean; type?: "button" | "submit";
}) {
  const base = "font-['Cinzel'] text-[10px] tracking-[0.3em] uppercase px-8 py-3.5 transition-all duration-300";
  if (outline) {
    return (
      <button type={type} onClick={onClick}
        className={`${base} text-[#c9a84c] border border-[#c9a84c]/50 hover:border-[#c9a84c]`}>
        {children}
      </button>
    );
  }
  return (
    <button type={type} onClick={onClick}
      className={`${base} hover:shadow-[0_0_24px_rgba(201,168,76,0.35)]`}
      style={{ background: "linear-gradient(90deg,#b8943f,#c9a84c,#d4b96a,#c9a84c,#b8943f)", color: "#0c1f10" }}>
      {children}
    </button>
  );
}

/* ─── Professionally cropped logo ───────────────────────────── */
function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim =
    size === "lg" ? "w-28 h-28" :
    size === "sm" ? "w-11 h-11" :
    "w-[72px] h-[72px] md:w-[88px] md:h-[88px]";
  return (
    <div className={`${dim} rounded-full overflow-hidden ring-1 ring-[#c9a84c]/45 flex-shrink-0 shadow-[0_0_16px_rgba(201,168,76,0.12)]`}>
      <img
        src={logoImg}
        alt="Castle Eden — A Luxury Heritage Stay"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/* ─── Bullet item ────────────────────────────────────────────── */
function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-[#f5e6c8]/68 text-sm font-['Lato']">
      <div className="w-1 h-1 rotate-45 bg-[#c9a84c] flex-shrink-0 mt-2" />
      {text}
    </li>
  );
}
/*Query Form*/
function QueryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    interest: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSending(true);
  setError("");

  try {
    const response = await fetch("https://formspree.io/f/xbgrkrwe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  } catch {
    setError("Unable to send your enquiry. Please try again.");
  } finally {
    setSending(false);
  }
};

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c] flex items-center justify-center mx-auto mb-6">
          <Send size={24} className="text-[#c9a84c]" />
        </div>

        <p className="font-['Cinzel'] text-[#c9a84c] text-sm tracking-widest mb-3">
          QUERY RECEIVED
        </p>

        <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/70 text-lg">
          Thank you, {form.name || "dear guest"}. Our concierge team will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inp =
    "w-full bg-[#1a3020] border border-[#c9a84c]/30 text-[#f5e6c8] px-4 py-3 text-sm font-['Lato'] focus:outline-none focus:border-[#c9a84c] transition-colors placeholder:text-[#f5e6c8]/25";

  const lbl =
    "block font-['Cinzel'] text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lbl}>Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inp}
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label className={lbl}>Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className={inp}
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={lbl}>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            className={inp}
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div>
          <label className={lbl}>Nature of Interest</label>
          <select
            name="interest"
            className={inp}
            value={form.interest}
            onChange={e => setForm({ ...form, interest: e.target.value })}
          >
            <option value="" className="bg-[#1a3020]">
              Select an option
            </option>

            {[
              "Heritage Room Stay",
              "Private House Exclusive",
              "Private Dining",
              "Cultural Experience",
              "Corporate Retreat",
              "Private Event",
              "Film / Photography",
              "Eden Circle Membership"
            ].map(o => (
              <option key={o} value={o} className="bg-[#1a3020]">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className={lbl}>Check-In</label>
          <input
            type="date"
            name="checkin"
            className={inp}
            style={{ colorScheme: "dark" }}
            value={form.checkin}
            onChange={e => setForm({ ...form, checkin: e.target.value })}
          />
        </div>

        <div>
          <label className={lbl}>Check-Out</label>
          <input
            type="date"
            name="checkout"
            className={inp}
            style={{ colorScheme: "dark" }}
            value={form.checkout}
            onChange={e => setForm({ ...form, checkout: e.target.value })}
          />
        </div>

        <div>
          <label className={lbl}>Guests</label>
          <select
            name="guests"
            className={inp}
            value={form.guests}
            onChange={e => setForm({ ...form, guests: e.target.value })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <option key={n} value={n} className="bg-[#1a3020]">
                {n} Guest{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={lbl}>Your Query or Special Requests</label>

        <textarea
          name="message"
          rows={3}
          className={`${inp} resize-none`}
          placeholder="Tell us about your occasion, dietary requirements, preferred dates, or experiences you'd like to explore."
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center">
          {error}
        </p>
      )}

      <div className="pt-1 text-center">
        <GoldBtn type="submit">
          {sending ? "Sending..." : "Send Enquiry"}
        </GoldBtn>

        <p className="font-['Lato'] text-[#f5e6c8]/30 text-xs mt-3">
          Our concierge team responds within 24 hours.
        </p>
      </div>

    </form>
  );
}
/* ─── Modal ──────────────────────────────────────────────────── */
function Modal({ title, sub, onClose }: { title: string; sub: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: "linear-gradient(160deg,#0e2416,#0c1f10)", border: "1px solid rgba(201,168,76,0.4)" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#c9a84c] hover:text-white transition-colors z-10">
          <X size={20} />
        </button>
        <div className="p-8 pt-10">
          <div className="text-center mb-8">
            <p className="font-['Cinzel'] text-[#c9a84c] text-[10px] tracking-[0.35em] uppercase mb-2">{title}</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#f5e6c8] italic">{sub}</h2>
            <div className="w-20 h-px bg-[#c9a84c] mx-auto mt-4" />
          </div>
          <QueryForm />
        </div>
      </div>
    </div>
  );
}

/* ─── Expandable event card ──────────────────────────────────── */
function EventCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-[#c9a84c]/20 hover:border-[#c9a84c]/45 transition-colors cursor-pointer"
      style={{ background: "rgba(201,168,76,0.03)" }}
      onClick={() => setOpen(v => !v)}
    >
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
            <Icon size={16} className="text-[#c9a84c]" strokeWidth={1.3} />
          </div>
          <p className="font-['Cinzel'] text-[#f5e6c8]/85 text-[11px] tracking-[0.15em] uppercase">{title}</p>
        </div>
        {open
          ? <ChevronUp size={14} className="text-[#c9a84c] flex-shrink-0" />
          : <ChevronDown size={14} className="text-[#c9a84c] flex-shrink-0" />}
      </div>
      {open && (
        <div className="px-5 pb-5 border-t border-[#c9a84c]/15">
          <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/60 text-base mt-4 leading-relaxed">{desc}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Main App ───────────────────────────────────────────────── */
export default function App() {
  const [modal, setModal] = useState<null | "stay" | "experience" | "dining" | "enquire">(null);

  return (
    <div className="min-h-screen font-['Lato'] text-[#f5e6c8]"
      style={{ background: "linear-gradient(180deg,#0a1c0d 0%,#0c1f10 45%,#0e2416 100%)" }}>

      {/* Top ornament */}
      <div className="w-full px-6 pt-4">
        <svg viewBox="0 0 800 12" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="6" x2="330" y2="6" stroke="#c9a84c" strokeWidth="0.8" />
          <polygon points="338,6 344,2 350,6 344,10" fill="#c9a84c" />
          <polygon points="357,6 363,2 369,6 363,10" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
          <circle cx="381" cy="6" r="5" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
          <polygon points="393,6 399,2 405,6 399,10" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
          <polygon points="412,6 418,2 424,6 418,10" fill="#c9a84c" />
          <line x1="432" y1="6" x2="800" y2="6" stroke="#c9a84c" strokeWidth="0.8" />
        </svg>
      </div>

      {/* ── Nav ── */}
      <nav className="flex items-center justify-between px-8 py-3 relative min-h-[96px]">
        <div className="hidden md:flex items-center gap-8">
          {["Stay","Experiences","Dining"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="font-['Cinzel'] text-[10px] tracking-[0.25em] text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors uppercase">
              {item}
            </a>
          ))}
        </div>

        {/* Logo — circular crop, no black corners */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo size="md" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Events","The Eden Circle","Enquire"].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g,"-")}`}
              className="font-['Cinzel'] text-[10px] tracking-[0.25em] text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors uppercase">
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden ml-auto">
          <button className="font-['Cinzel'] text-[10px] tracking-widest text-[#c9a84c] uppercase">Menu</button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative px-6 md:px-16 pt-6 pb-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-['Cinzel'] text-[#c9a84c]/55 text-[9px] tracking-[0.35em] uppercase mb-5">
            Kothi Munshi Asharfi Lall Saheb · Malviya Nagar · Prayagraj, India
          </p>
          <h1 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] leading-[1.05]"
            style={{ fontSize: "clamp(2.6rem,5.5vw,4.4rem)" }}>
            More Than<br />A Stay.
          </h1>
          <h1 className="font-['Cormorant_Garamond'] italic text-[#c9a84c] leading-[1.05] mt-1"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
            A Private Heritage<br />Experience.
          </h1>
          <div className="my-6"><OrnamentLine /></div>
          <p className="font-['Lato'] font-light text-[#f5e6c8]/70 leading-relaxed text-base md:text-lg max-w-md">
            A beautifully preserved family heritage residence where timeless architecture, refined hospitality, and the cultural soul of Prayagraj come together.
          </p>
          <p className="font-['Cormorant_Garamond'] italic text-[#c9a84c]/80 text-lg mt-3">
            Stay privately. Dine beautifully. Discover deeply.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <GoldBtn onClick={() => setModal("stay")}>Reserve Your Stay</GoldBtn>
            <GoldBtn outline onClick={() => setModal("experience")}>Explore Experiences</GoldBtn>
          </div>
          <p className="font-['Lato'] text-[#f5e6c8]/30 text-[10px] tracking-widest uppercase mt-5">
            Limited rooms · Personalised hospitality · Curated experiences
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 border border-[#c9a84c]/18 pointer-events-none" />
          <div className="absolute -inset-1.5 border border-[#c9a84c]/10 pointer-events-none" />
          <ImageWithFallback
            src={realProperty}
            alt="Castle Eden — the white and gold heritage courtyard facade in Prayagraj"
            className="w-full h-[440px] md:h-[540px] object-cover"
            style={{ filter: "brightness(0.93) contrast(1.04)" }}
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top,rgba(10,28,13,0.5) 0%,transparent 55%)" }} />
          <p className="absolute bottom-5 left-0 right-0 text-center font-['Cinzel'] text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase">
            Prayagraj, India · Est. 1933
          </p>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section id="stay" className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Prayagraj, India · Est. 1933</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl md:text-5xl italic mb-3">
            A Heritage Home, Reimagined
          </h2>
          <p className="font-['Cormorant_Garamond'] italic text-[#c9a84c]/80 text-xl mb-5">
            Where history becomes an experience.
          </p>
          <p className="font-['Lato'] text-[#f5e6c8]/62 leading-relaxed max-w-2xl mx-auto">
            Castle Eden is more than a place to spend the night. It is an invitation to slow down, step into another era, and experience Prayagraj through the intimacy of a private heritage home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { word: "Private.",      desc: "A more intimate alternative to conventional luxury hotels.", icon: Lock },
            { word: "Personalised.", desc: "Hospitality thoughtfully designed around each guest.", icon: Heart },
            { word: "Authentic.",    desc: "A genuine family heritage setting rather than a recreated luxury aesthetic.", icon: Landmark },
            { word: "Curated.",      desc: "Experiences thoughtfully selected to reveal the culture, history, cuisine, and character of Prayagraj.", icon: Star },
          ].map(({ word, desc, icon: Icon }) => (
            <div key={word}
              className="border border-[#c9a84c]/20 p-6 text-center hover:border-[#c9a84c]/50 transition-colors group"
              style={{ background: "rgba(201,168,76,0.03)" }}>
              <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-4 group-hover:border-[#c9a84c] transition-colors">
                <Icon size={18} className="text-[#c9a84c]" strokeWidth={1.2} />
              </div>
              <p className="font-['Cinzel'] text-[#c9a84c] text-sm tracking-widest mb-3">{word}</p>
              <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/60 text-base leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Castle Experience ── */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-2 border border-[#c9a84c]/15 pointer-events-none" />
          <img src={ROOM_IMG} alt="Heritage room with chandelier"
            className="w-full h-[420px] object-cover"
            style={{ filter: "brightness(0.85) sepia(0.1)" }} />
        </div>
        <div className="order-1 md:order-2">
          <SectionLabel>The Castle Experience</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl italic mb-4">
            Stay Within History
          </h2>
          <p className="font-['Lato'] text-[#f5e6c8]/62 leading-relaxed mb-8">
            Wake up surrounded by architecture, stories, and craftsmanship that have been part of a living family heritage for generations. Our residences combine the character of a historic home with the comfort, privacy, and thoughtful hospitality expected by today's discerning traveller.
          </p>
          <p className="font-['Cinzel'] text-[#c9a84c] text-[10px] tracking-[0.25em] uppercase mb-4">Your Stay Includes</p>
          <ul className="space-y-2.5">
            {["Heritage-inspired private rooms","Premium bedding and amenities","Personalised hosting","Private and intimate common spaces","Curated local recommendations","Heritage and cultural experiences","Bespoke dining options","Concierge-style assistance"].map(item => (
              <Bullet key={item} text={item} />
            ))}
          </ul>
          <div className="mt-8">
            <GoldBtn onClick={() => setModal("stay")}>Discover the Residences</GoldBtn>
          </div>
        </div>
      </section>

      {/* ── Private House Stay ── */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="border border-[#c9a84c]/25 p-8 md:p-14"
          style={{ background: "rgba(201,168,76,0.04)" }}>
          <div className="text-center mb-10">
            <SectionLabel>The Private House Stay</SectionLabel>
            <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl italic mb-4">
              Your Own Private World
            </h2>
            <p className="font-['Lato'] text-[#f5e6c8]/60 max-w-xl mx-auto leading-relaxed">
              For families, groups, senior executives, and guests seeking complete privacy, Castle Eden can be reserved as an exclusive private heritage residence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Users,     title: "Family Gatherings",      desc: "Reconnect with loved ones in an environment created for conversation, togetherness, and shared memories." },
              { icon: Landmark,  title: "NRI & Overseas Families",desc: "Return to India with a meaningful stay that brings you closer to the heritage and culture of Prayagraj." },
              { icon: Briefcase, title: "Executive Retreats",     desc: "A private and distinctive setting for leadership meetings, strategy sessions, and intimate corporate gatherings." },
              { icon: Heart,     title: "Intimate Celebrations",  desc: "Celebrate birthdays, anniversaries, family milestones, and special occasions in a truly personal setting." },
              { icon: Palette,   title: "Creative Retreats",      desc: "A distinctive environment for writers, artists, photographers, and creative minds seeking inspiration." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="text-center p-5 border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 transition-colors">
                <Icon size={20} className="text-[#c9a84c] mx-auto mb-3" strokeWidth={1.2} />
                <p className="font-['Cinzel'] text-[#c9a84c] text-[10px] tracking-[0.15em] uppercase mb-2">{title}</p>
                <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/55 text-sm leading-snug">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <GoldBtn onClick={() => setModal("enquire")}>Make Castle Eden Your Private Residence</GoldBtn>
          </div>
        </div>
      </section>

      {/* ── Curated Prayagraj ── */}
      <section id="experiences" className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Curated Prayagraj</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl md:text-5xl italic mb-4">
            Discover the City Beyond the Tourist Trail
          </h2>
          <p className="font-['Lato'] text-[#f5e6c8]/60 max-w-2xl mx-auto leading-relaxed">
            Castle Eden becomes your gateway to the cultural heart of Prayagraj. Our team curates private experiences around the interests of each guest, allowing you to discover the city through its people, places, flavours, traditions, and stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          <img src={GHAT_IMG} alt="Ghat on the Ganga, Prayagraj"
            className="w-full h-56 object-cover" style={{ filter: "brightness(0.8) sepia(0.1)" }} />
          <img src={ARCH_IMG} alt="Stone archway heritage architecture"
            className="w-full h-56 object-cover" style={{ filter: "brightness(0.8) sepia(0.1)" }} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { icon: Landmark, title: "Heritage",     desc: "Explore historic neighbourhoods, architecture, landmarks, and stories from old Prayagraj." },
            { icon: Star,     title: "Spirituality", desc: "Discover important temples, ghats, sacred spaces, and cultural landmarks." },
            { icon: ChefHat,  title: "Cuisine",      desc: "Experience the flavours, ingredients, recipes, and culinary traditions that make the region distinctive." },
            { icon: Palette,  title: "Culture",      desc: "Meet local artists, craftspeople, historians, and cultural practitioners." },
            { icon: Camera,   title: "Photography",  desc: "Explore distinctive architectural and cultural locations through thoughtfully curated itineraries." },
            { icon: Waves,    title: "The Ganga",    desc: "Experience memorable private moments along the river and discover the cultural landscape surrounding it." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="text-center p-5 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors group"
              style={{ background: "rgba(201,168,76,0.03)" }}>
              <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-3 group-hover:border-[#c9a84c] transition-colors">
                <Icon size={17} className="text-[#c9a84c]" strokeWidth={1.2} />
              </div>
              <p className="font-['Cinzel'] text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase mb-2">{title}</p>
              <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/50 text-xs leading-snug">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <GoldBtn outline onClick={() => setModal("experience")}>Plan My Experience</GoldBtn>
        </div>
      </section>

      {/* ── Events ── */}
      <section id="events" className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel>Events at Castle Eden</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl italic mb-4">
            A House for Ideas, Culture & Connection
          </h2>
          <p className="font-['Lato'] text-[#f5e6c8]/60 max-w-xl mx-auto leading-relaxed">
            Throughout the year, Castle Eden hosts thoughtfully curated gatherings that bring together interesting people, ideas, and experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {[
            { icon: Users,        title: "Historian Sessions",    desc: "Conversations about the forgotten stories and hidden histories of the city." },
            { icon: Presentation, title: "Art & Craft Workshops", desc: "Hands-on experiences with local artists and traditional craftspeople." },
            { icon: BookOpen,     title: "Literary Evenings",     desc: "Books, poetry, storytelling, and intimate conversations in a heritage setting." },
            { icon: ChefHat,      title: "Culinary Experiences",  desc: "Chef-led dinners, regional food explorations, and cooking workshops." },
            { icon: Music,        title: "Music Evenings",        desc: "Intimate performances in the atmosphere of a living heritage residence." },
            { icon: Camera,       title: "Photography Sessions",  desc: "Architecture, people, culture, and visual storytelling through curated itineraries." },
            { icon: Heart,        title: "Wellness Experiences",  desc: "Yoga, meditation, and restorative sessions in a private heritage setting." },
            { icon: Star,         title: "Cultural Soirées",      desc: "Elegant evenings combining food, music, conversation, and heritage." },
          ].map(props => <EventCard key={props.title} {...props} />)}
        </div>
        <div className="text-center mt-8">
          <GoldBtn outline onClick={() => setModal("enquire")}>Explore Upcoming Events</GoldBtn>
        </div>
      </section>

      {/* ── Private Dining ── */}
      <section id="dining" className="px-6 md:px-16 py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>Private Dining</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl italic mb-4">
            A Table Worth Travelling For
          </h2>
          <p className="font-['Lato'] text-[#f5e6c8]/62 leading-relaxed mb-8">
            At Castle Eden, dining becomes part of the experience. Guests can enjoy intimate meals inspired by the culinary traditions of the region, thoughtfully served within the atmosphere of a living heritage residence.
          </p>
          <div className="space-y-5">
            {[
              { title: "Heritage Dinner",      desc: "A multi-course dining experience inspired by regional traditions and timeless flavours." },
              { title: "Private Chef's Table", desc: "An intimate culinary experience designed for a select group of guests." },
              { title: "Culinary Workshop",    desc: "Discover local ingredients, traditional techniques, and the stories behind regional cuisine." },
              { title: "Celebration Dining",   desc: "A beautifully hosted private dinner for birthdays, anniversaries, and special occasions." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-['Cinzel'] text-[#c9a84c] text-[10px] tracking-widest uppercase">{title}</p>
                  <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/60 mt-1 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <GoldBtn onClick={() => setModal("dining")}>Enquire About Private Dining</GoldBtn>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 border border-[#c9a84c]/15 pointer-events-none" />
          <img src={FOOD_IMG} alt="Curated dining spread"
            className="w-full h-[380px] object-cover"
            style={{ filter: "brightness(0.85) sepia(0.08)" }} />
          <img src={DINING_IMG} alt="Elegant private table setting"
            className="w-full h-[160px] object-cover mt-2"
            style={{ filter: "brightness(0.85) sepia(0.08)" }} />
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Premium Experiences</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl italic">
            Three Ways to Experience Castle Eden
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "The Heritage Stay",
              tag: "For the discerning traveller",
              items: ["Heritage room stay","Breakfast","Personalised local recommendations"],
              cta: "Enquire", featured: false,
            },
            {
              name: "The Eden Experience",
              tag: "For guests seeking more than accommodation",
              items: ["Heritage room stay","Private dining","Curated heritage experience","Personalised city exploration"],
              cta: "Enquire", featured: true,
            },
            {
              name: "The Castle Exclusive",
              tag: "Complete privacy for a select few",
              items: ["Exclusive private residence","Personalised hospitality","Private dining","Curated experiences","Dedicated itinerary"],
              cta: "By Enquiry", featured: false,
            },
          ].map(pkg => (
            <div key={pkg.name}
              className={`p-8 border flex flex-col ${pkg.featured ? "border-[#c9a84c]/60" : "border-[#c9a84c]/20"}`}
              style={{ background: pkg.featured ? "rgba(201,168,76,0.08)" : "rgba(201,168,76,0.03)" }}>
              {pkg.featured && (
                <div className="flex justify-center mb-4">
                  <Crown size={18} className="text-[#c9a84c]" strokeWidth={1.2} />
                </div>
              )}
              <p className="font-['Cinzel'] text-[#c9a84c] text-sm tracking-widest mb-2 text-center">{pkg.name}</p>
              <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/55 text-sm mb-6 text-center">{pkg.tag}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.items.map(item => <Bullet key={item} text={item} />)}
              </ul>
              <div className="text-center">
                <GoldBtn onClick={() => setModal("enquire")} outline={!pkg.featured}>{pkg.cta}</GoldBtn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Eden Circle ── */}
      <section id="the-eden-circle" className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div className="border border-[#c9a84c]/30 p-8 md:p-14 text-center"
          style={{ background: "rgba(201,168,76,0.04)" }}>
          <SectionLabel>The Eden Circle</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl italic mb-4">
            By Invitation Only
          </h2>
          <p className="font-['Lato'] text-[#f5e6c8]/60 max-w-xl mx-auto mb-10 leading-relaxed">
            The Eden Circle is an invitation-only community for people who appreciate heritage, culture, hospitality, and meaningful experiences.
          </p>
          <p className="font-['Cinzel'] text-[#c9a84c] text-[10px] tracking-[0.25em] uppercase mb-6">Members Receive</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-left">
            {["Priority room reservations","Private dining invitations","Members-only cultural evenings","Early access to workshops","Curated city experiences","Private event privileges","Preferred rates for exclusive-use stays","Invitations to special gatherings","Personalised concierge assistance"].map(item => (
              <div key={item} className="flex items-start gap-2">
                <div className="w-1 h-1 rotate-45 bg-[#c9a84c] flex-shrink-0 mt-2" />
                <p className="font-['Lato'] text-[#f5e6c8]/60 text-xs leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <GoldBtn onClick={() => setModal("enquire")}>Apply for Membership</GoldBtn>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section id="enquire" className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel>Plan Your Visit</SectionLabel>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] text-4xl md:text-5xl italic">
            Send Us a Query
          </h2>
          <div className="my-6"><OrnamentLine /></div>
        </div>
        <div className="border border-[#c9a84c]/30 p-8 md:p-12"
          style={{ background: "rgba(201,168,76,0.04)" }}>
          <QueryForm />
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="px-6 md:px-16 py-20 max-w-4xl mx-auto text-center">
        <div className="mb-8"><OrnamentLine /></div>
        <h2 className="font-['Cormorant_Garamond'] font-light text-[#f5e6c8] italic"
          style={{ fontSize: "clamp(2.4rem,5vw,4rem)", lineHeight: 1.08 }}>
          Come as a Guest.<br />Leave with a Story.
        </h2>
        <p className="font-['Lato'] text-[#f5e6c8]/60 leading-relaxed max-w-lg mx-auto mt-6 mb-6">
          Castle Eden is a family heritage home created for people who seek something more personal than a hotel and more meaningful than a conventional holiday.
        </p>
        <p className="font-['Cormorant_Garamond'] italic text-[#c9a84c]/85 text-xl leading-loose mb-4">
          Stay within history.<br />
          Experience Prayagraj differently.<br />
          Discover the city through its stories, flavours, people, and culture.
        </p>
        <p className="font-['Cinzel'] text-[#f5e6c8]/45 text-[11px] tracking-[0.3em] uppercase mb-10">
          Stay with us. Experience the Castle Eden way.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <GoldBtn onClick={() => setModal("stay")}>Reserve Your Stay</GoldBtn>
          <GoldBtn outline onClick={() => setModal("experience")}>Plan a Private Experience</GoldBtn>
        </div>
        <div className="mt-12"><OrnamentLine /></div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 md:px-16 py-10 border-t border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="sm" />
          <div className="text-center">
            <p className="font-['Cinzel'] text-[#c9a84c] text-[11px] tracking-[0.35em] uppercase mb-1">Castle Eden</p>
            <p className="font-['Lato'] text-[#f5e6c8]/45 text-xs leading-relaxed">
              Kothi Munshi Asharfi Lall Saheb<br />
              Malviya Nagar, Prayagraj, Uttar Pradesh 211003, India
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-['Cormorant_Garamond'] italic text-[#f5e6c8]/35 text-sm mb-1">
              A Luxury Heritage Stay · Private Events · Curated Cultural Experiences
            </p>
            <p className="font-['Lato'] text-[#f5e6c8]/20 text-[10px] tracking-widest uppercase">
              © 2026 Castle Eden. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <GoldBtn onClick={() => setModal("stay")}>Book Now</GoldBtn>
      </div>

      {modal && (
        <Modal
          title={
            modal === "stay"       ? "Reserve Your Stay"    :
            modal === "experience" ? "Plan Your Experience" :
            modal === "dining"     ? "Private Dining"       : "Make an Enquiry"
          }
          sub={
            modal === "stay"       ? "Your Heritage Escape Awaits"  :
            modal === "experience" ? "Curated for You, Personally"  :
            modal === "dining"     ? "A Table Worth Travelling For" : "We Will Be in Touch"
          }
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}

