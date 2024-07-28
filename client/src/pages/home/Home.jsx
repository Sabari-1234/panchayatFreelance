import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { IoCloudUploadOutline } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="main-root flex-auto flex flex-col bg-gray-100 p-10 gap-10">
        <div
          className="upload-btn w-full flex-1 flex justify-center items-center rounded bg-[#fcfcfc]"
          style={{ border: "1px solid lightgray" }}
        >
          <IoCloudUploadOutline size={70} />
        </div>
        <div
          className="excel-root w-full flex-1 flex justify-center items-center rounded border-black bg-[#fcfcfc]"
          style={{ border: "1px solid lightgray" }}
        >
          <SiMicrosoftexcel size={70} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
