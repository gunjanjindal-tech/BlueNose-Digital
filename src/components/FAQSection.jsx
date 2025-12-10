import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results typically start showing within 4–6 weeks, depending on your industry, competition, and campaign goals. SEO takes longer (2–3 months), while paid ads show faster results within days.",
    },
    {
      question: "Can I choose just one service instead of a full package?",
      answer:
        "Absolutely! You can select individual services like SMM, SEO, Ads, or Branding. We also suggest a custom mix based on your business goals.",
    },
    {
      question: "How do I track the success of my campaigns?",
      answer:
        "We provide detailed analytics dashboards, monthly reports, and real-time insights covering reach, engagement, conversions, ROI, and growth metrics.",
    },
    {
      question: "What makes Bluenose different from other agencies?",
      answer:
        "Our mix of strategy, creativity, performance marketing, transparent communication, and result-focused execution makes us stand out — backed by 10+ years of experience and 120+ completed projects.",
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer:
        "No long-term contracts! We offer flexible monthly plans. Our goal is to earn your trust through performance — not lock you in.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 text-white bg-black overflow-hidden">

      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #0E6388 0%, transparent 60%), radial-gradient(circle at 80% 70%, #4BC1E8 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT TITLE */}
       <div className="text-center md:text-left">
  <p className="text-white text-sm font-medium tracking-wide mb-3">
    → FAQ'S
  </p>

  <h2 className="text-3xl md:text-5xl font-extrabold">
    Everything You Should
    <br />
    <span className="text-white">
      Know Before Starting
    </span>
  </h2>
</div>

        {/* FAQ LIST – NO HOVER / NO ANIMATION */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="bg-white border border-white/20 rounded-2xl p-5 cursor-pointer shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-black">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-5 h-5 text-black transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-3 text-black leading-relaxed text-[15px] pr-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
