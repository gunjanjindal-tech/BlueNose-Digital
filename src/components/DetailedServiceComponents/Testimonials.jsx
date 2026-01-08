import Slider from "react-slick";

export default function Testimonials() {
  const reviews = [
    {
      name: "Charles Ellingsen | Unity Network",
      text: "Rivaaz.io is a multi-talented team offering a wide array of skills, creativity, and execution.",
      rating: 5,
      loc: "Singapore",
      size: "11-50 Employees",
      period: "Feb. 2022 - Ongoing"
    },
    {
      name: "Christophe Ozcan | Tozex",
      text: "We were very happy with the team’s work. Everything was delivered on time and with great quality.",
      rating: 5,
      loc: "Spain",
      size: "11-50 Employees",
      period: "Feb. - Apr. 2023"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {reviews.map((r, i) => (
          <div key={i}>
            <div
              className="
                p-10 rounded-3xl shadow-xl mx-auto
               
                text-white flex flex-col items-center
              "
              style={{
    background: "rgb(14, 99, 136)"
  }}
            >
              {/* Stars */}
              <h3 className="text-4xl sm:text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</h3>

              {/* Text */}
              <p className="max-w-xl mx-auto text-base sm:text-lg opacity-90">
                {r.text}
              </p>

              {/* Name */}
              <p className="mt-6 text-lg sm:text-xl font-bold">{r.name}</p>

              {/* Metadata */}
              <p className="opacity-75 text-xs sm:text-sm">
                {r.loc} • {r.size} • {r.period}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
