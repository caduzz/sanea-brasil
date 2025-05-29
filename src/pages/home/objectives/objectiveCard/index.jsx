import {
  FaHeartbeat,
  FaBookOpen,
  FaVenusMars,
  FaTint,
  FaArrowsAltV,
  FaCity,
  FaGlobeAmericas
} from "react-icons/fa";

const icons = {
  FaHeartbeat,
  FaBookOpen,
  FaVenusMars,
  FaTint,
  FaArrowsAltV,
  FaCity,
  FaGlobeAmericas
};

export function ObjectiveCard({ id, title, icon, color }) {
  const IconComponent = icons[icon];
  return (
    <div className="w-55 h-65 p-5 flex flex-col items-center justify-center shadow bg-white rounded-md overflow-hidden">
      <div 
        style={{
          color
        }}
        className="p-2 w-full flex items-start justify-center"
      >
        <h3 style={{fontFamily: "arial"}} className="text-5xl font-bold mr-2 uppercase">{id}</h3>
        <p style={{fontFamily: "arial"}} className="text-sm font-bold uppercase">{title}</p>
      </div>
      <IconComponent className="text-8xl mx-auto mt-2" color={color} />
    </div>
  );
}
