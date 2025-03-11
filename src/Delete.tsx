import axios from "axios";
import { Trash2 } from "lucide-react";

const Delete = ({ todoId, fetchTodos }: { todoId: any; fetchTodos: any }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/delete/${todoId}`
      );
      alert(response.data.message);
      if (response.data.message == "successfully deleted") {
        fetchTodos();
      }
    } catch (error) {
      console.error("Error deleting Todolist:", error);
      alert("Failed to delete the Todolist.");
    }
  };

  return (
    <div>
      <div
        className=" cursor-pointer active:bg-red-500 p-0.5 rounded-sm"
        onClick={handleDelete}
      >
        <Trash2 className="text-gray-500" size={20} />
      </div>
    </div>
  );
};

export default Delete;
