import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [task, setTask] = useState("");

  const handleTaskChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/create`,
        {
          task: task,
        }
      );

      console.log("Created successful:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Create failed:", error);
    }
  };
  return (
    <div>
      <div className=" flex gap-3">
        <input
          type="text"
          placeholder="Enter Task"
          onChange={handleTaskChange}
          className=" w-64 p-2 outline-none border rounded-md border-blue-500"
        />
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white rounded-md px-4 cursor-pointer"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;
