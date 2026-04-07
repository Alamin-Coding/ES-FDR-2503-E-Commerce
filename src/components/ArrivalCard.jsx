const ArrivalCard = ({
  bgImage = "",
  heading = "PlayStation 5",
  description = "Black and White version of the PS5 coming out on sale.",
  ctaLabel = "Shop Now",
  ctaHref = "/shop",
}) => {
  return (
    <div
      className="flex items-end w-full bg-cover bg-center rounded"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className=" justify-end px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-2">{heading}</h2>
        <p className="text-sm text-white/70 mb-4 max-w-xs">{description}</p>
        <a
          href={ctaHref}
          className="text-sm font-semibold text-white underline underline-offset-4"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};
export default ArrivalCard;
