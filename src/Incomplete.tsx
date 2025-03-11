import axios from "axios";

const Incomplete = ({setTodolists}:any) => {

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/incomplete`
      );
      console.log("here", response.data.incompletedTasks);
      setTodolists(response.data.incompletedTasks);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
        <button onClick={handleClick} className="p-2 bg-orange-600 text-white rounded-md cursor-pointer">Incomplete</button>
    </div>
  )
}

export default Incomplete