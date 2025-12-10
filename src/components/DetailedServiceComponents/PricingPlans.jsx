import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function PricingPlans() {
  const [billing, setBilling] = useState("quarter");
  const [cur, setCur] = useState("usd");
  const [tooltip, setTooltip] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const price = {
    quarter: {
      usd: [3200, 5600, 9600, "20,000 – 100,000"],
      inr: ["2,24,000", "3,92,000", "6,72,000", "14L – 70L"],
      cad: [4300, 7600, 13000, "28,000 – 140,000"],
    },
    semi: {
      usd: [2816, 4928, 8448, "17,600 – 88,000"],
      inr: ["1,97,000", "3,45,000", "5,92,000", "12.5L – 55L"],
      cad: [3780, 6650, 11300, "24,000 – 120,000"],
    },
    annual: {
      usd: [2240, 3920, 6720, "14,000 – 70,000"],
      inr: ["1,57,000", "2,76,000", "4,71,000", "10L – 49L"],
      cad: [3000, 5300, 9100, "19,000 – 98,000"],
    },
  };

  const tips = [
    "Best for startups testing consistent social output.",
    "Ideal for brands who need regular monthly scaling.",
    "Designed for brands needing aggressive growth.",
    "Perfect for companies needing 360° custom support.",
  ];

  const val = price[billing][cur];
  const symbol = cur === "inr" ? "₹" : cur === "usd" ? "$" : "C$";

  // -----------------------------
  // Form Handlers
  // -----------------------------

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    return err;
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone || "Not provided",
      service: selectedPlan,
      message: form.message || "No message added",
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_h8q2e1g",
        "template_efbydqb",
        templateParams,
        "I8XrZyy0UGP89_FWp"
      )
      .then(() => {
        setSuccess("Thanks for reaching out. We’ve received your request and will get back to you soon.");

        setForm({ name: "", email: "", phone: "", service: "", message: "" });

        setTimeout(() => setSuccess(""), 3000);
      })
      .catch(() => {
        alert("We couldn’t process your request. Please try again in a moment.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
           <h2 className="text-3xl md:text-4xl font-extrabold text-[#063349 text-center">
          Find Your Perfect Plan for
          <span className=" text-[#0E6388]">
            {" "}Faster, Smarter Growth
          </span>
        </h2>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mt-10">
          {[
            ["quarter", "Quarterly"],
            ["semi", "Semi-annual 12% off"],
            ["annual", "Annual 30% off"],
          ].map(([key, label]) => (
           <button
  key={key}
  onClick={() => setBilling(key)}
  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border
    ${
      billing === key
        ? "text-white shadow-md border-transparent"
        : "bg-white text-[#0E3D55] border-[#B5D9E8]"
    }`}
  style={
    billing === key
      ? { background: "rgb(14, 99, 136)" }
      : {}
  }
>

              {label}
            </button>
          ))}
        </div>

        {/* Currency Toggle */}
        <div className="flex justify-center gap-8 mt-6 text-2xl">
          {["inr", "usd", "cad"].map((c) => (
            <span
              key={c}
              onClick={() => setCur(c)}
              className={`cursor-pointer font-semibold transition 
                ${cur === c ? "text-[#0E6388] scale-125"
                            : "text-[#063349]/40"}`}
            >
              {c === "inr" ? "₹" : c === "usd" ? "$" : "C$"}
            </span>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-14">

          {["40h/mo", "80h/mo", "160h/mo", "Custom"].map((hrs, i) => (
            <motion.div
              key={hrs}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                text-white flex flex-col justify-between h-full"
             style={{
    background: "rgb(14, 99, 136)"
  }}
            >

              {/* BEST VALUE Badge */}
              {billing === "annual" && i === 2 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 
                  bg-white text-[#0E6388] border-1 text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                  ⭐ Best Value
                </span>
              )}

              {/* Title + Tooltip */}
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/80 text-sm">
                  {["Get started plan", "Boost plan", "Full force plan", "All inclusive"][i]}
                </p>

                <div
                  onMouseEnter={() => setTooltip(i)}
                  onMouseLeave={() => setTooltip(null)}
                  className="relative"
                >
                  <Info size={18} className="cursor-pointer text-white opacity-80 hover:opacity-100" />

                  {/* Tooltip */}
                  <AnimatePresence>
                    {tooltip === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute left-6 top-0 bg-white border border-[#B5D9E8]
                          shadow-xl p-3 rounded-xl text-xs text-[#063349] w-48 z-[50]"
                      >
                        {tips[i]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <h1 className="text-4xl font-extrabold">{hrs}</h1>

              {/* Price */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={val[i]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl mt-3"
                >
                  {symbol}{val[i]}{" "}
                  <span className="text-white/50 text-sm">/ Monthly</span>
                </motion.p>
              </AnimatePresence>

              {/* CTA */}
              <button
                onClick={() => {
                  setSelectedPlan(hrs);
                  setForm({ ...form, service: hrs });
                  setShowModal(true);
                }}
                className="mt-6 w-full py-3 rounded-full bg-white text-[#063349]
                  font-semibold hover:opacity-90 transition"
              >
                Book A Call
              </button>

            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------------- MODAL ---------------------- */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center 
              justify-center z-[100]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
              >
                ✖
              </button>

              <h2 className="text-2xl font-bold text-[#0A3346] mb-4">
                Book A Call — {selectedPlan}
              </h2>

             
              {/* FORM */}
              <form onSubmit={sendMessage} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border bg-[#F8FBFF]"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border bg-[#F8FBFF]"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border bg-[#F8FBFF]"
                />

                <input
                  type="text"
                  name="service"
                  readOnly
                  value={selectedPlan}
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border bg-[#F8FBFF]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r 
                    from-[#4BC1E8] to-[#0E6388] text-white font-semibold shadow"
                >
                  {loading ? "Sending..." : "Submit Request"}
                </button>
                 {success && (
                <p className=" text-green-700 p-3 text-sm rounded-lg mb-4 text-center">
                  {success}
                </p>
              )}

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
