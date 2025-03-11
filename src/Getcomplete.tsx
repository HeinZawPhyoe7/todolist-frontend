import axios from "axios";

const Getcomplete = ({ setTodolists }: any) => {
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/complete`
      );
      console.log("here", response.data.completed_tasks);
      setTodolists(response.data.completed_tasks);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="flex justify-end w-80 mt-5">
      <button
        onClick={handleClick}
        className="p-2 bg-blue-600 text-white rounded-md cursor-pointer"
      >
        Completed
      </button>
    </div>
  );
};

export default Getcomplete;
