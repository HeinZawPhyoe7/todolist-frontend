import axios from "axios";

const Complete = ({ setTodolists }: any) => {
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/get-complete`
      );
      console.log("here", response.data.completedTasks);
      setTodolists(response.data.completedTasks);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="">
      <button
        onClick={handleClick}
        className="p-2 bg-green-500 text-white rounded-md cursor-pointer"
      >
        Completed
      </button>
    </div>
  );
};

export default Complete;
