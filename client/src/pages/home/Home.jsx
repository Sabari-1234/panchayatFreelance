import { IoCloudUploadOutline } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";
import { GrDatabase } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="m-4 flex flex-auto flex-col gap-10">
      <div
        className="upload-btn w-full flex-1 flex justify-center items-center rounded bg-[#fcfcfc]"
        style={{ border: "1px solid lightgray" }}
        onClick={() => navigate("/upload")}
      >
        <IoCloudUploadOutline size={70} />
      </div>
      <div
        className="excel-root w-full flex-1 flex justify-center items-center rounded bg-[#fcfcfc]"
        style={{ border: "1px solid lightgray" }}
      >
        <SiMicrosoftexcel size={70} />
      </div>
      <div
        className="excel-root w-full flex-1 flex justify-center items-center rounded bg-[#fcfcfc]"
        style={{ border: "1px solid lightgray" }}
        onClick={() => navigate("/storage")}
      >
        <GrDatabase size={60} />
      </div>
    </div>
  );
};

export default Home;
