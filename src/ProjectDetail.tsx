// import { useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function ProjectDetail() {
  // const { id } = useParams();
  let navigate = useNavigate();
  return (
    <div className="flex flex-col text-primary relative pt-12 font-inter items-center">
      {/* Back Arrow */}
      <div
        onClick={() => navigate(-1)}
        className="absolute top-12 right-8 cursor-pointer"
      >
        <RiArrowGoBackFill />
      </div>

      {/* Header Content */}
      <h1 className="font-poppins font-extrabold text-5xl mb-4 tracking-[1.5em]">
        ALSAT
      </h1>
      <h3 className="font-medium text-xl tracking-[.2em]">
        Advanced Logistics Management App
      </h3>
    </div>
  );
}
