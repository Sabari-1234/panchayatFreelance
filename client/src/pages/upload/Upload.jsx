const Upload = () => {
  return (
    <div className="">
      <p className="text-2xl">APPLICANT DETAILS</p>
      <div className="flex flex-col mt-2">
        <p>
          Applicant Name <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="text"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>

      <div className="flex flex-col mt-2">
        <p>
          Applicant ID <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="text"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>

      <div className="flex flex-col mt-2">
        <p>
          Street <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="text"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>

      <div className="flex flex-col mt-2">
        <p>
          Street Type <span className="text-red-700 font-bold">*</span>
        </p>
        <select
          name="street"
          id="street"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        >
          <option value="tar">Tar</option>
          <option value="cement">Cement</option>
          <option value="earth">Earth</option>
        </select>
      </div>

      <div className="flex flex-col mt-2">
        <p>
          Street Length <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="number"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>
      <div className="flex flex-col mt-2">
        <p>
          Street Width<span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="number"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>

      <div className="flex flex-col mt-2">
        <p>
          Passage Length <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="number"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>
      <div className="flex flex-col mt-2">
        <p>
          Passage Width <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="number"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>

      <div className="flex flex-col mt-2">
        <p>
          Boundry North <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="text"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>
      <div className="flex flex-col mt-2">
        <p>
          Boundry South <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="text"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>
      <div className="flex flex-col mt-2">
        <p>
          Boundry East <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="text"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>
      <div className="flex flex-col mt-2">
        <p>
          Boundry West <span className="text-red-700 font-bold">*</span>
        </p>
        <input
          type="text"
          className="w-full p-2 outline-none mt-2 rounded"
          style={{ border: "1px solid lightgray" }}
        />
      </div>

      <div className="flex flex-col mt-2">
        <p>Location</p>
        <div className="">Latindcnd cndncjdn dc djnndn d j</div>
      </div>

      <div className="flex flex-col mt-2">
        <p>
          Take photo <span className="text-red-700 font-bold">*</span>
        </p>
      </div>
    </div>
  );
};

export default Upload;
