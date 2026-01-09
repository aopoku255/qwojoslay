import { Link } from "react-router-dom";
const ShowCaseCard5 = ({ offer, text, subtitle, image }) => {
  return (
    <div
      className="border border-gray-200 col-span-2 px-8 text-gray-600
  hover:shadow-lg hover:border-transparent
  transition-all duration-300 ease-out lg:py-0 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image first on small screens */}
        <img src={image} alt="Jacket" className="h-52 mx-auto md:order-2" />

        {/* Text */}
        <div className="md:order-1">
          <p className="uppercase">Special offer</p>
          <h3 className="font-bold text-3xl">
            <span className="text-red-400">{offer}</span> {text}
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard5;
