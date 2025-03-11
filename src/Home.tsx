import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { Circle, CircleCheckBig } from "lucide-react";
import Delete from "./Delete";
import Getcomplete from "./Getcomplete";

const Home = () => {
  const [todolists, setTodolists] = useState<any>();

  const handleClick = async (id: any, status: any) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/update/${id}`,
        {
          status: status == "0" ? "1" : "0",
        }
      );

      console.log("Updated successful:", response.data);
      if (response.data.message == "successfully updated") {
        fetchTodos();
      }
    } catch (error) {
      console.error("Create failed:", error);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/todo-all`
      );
      console.log(response.data.todolist);

      setTodolists(response.data.todolist);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div className="bg-gray-100 h-screen w-screen ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="font-bold text-2xl">ToDo List</h2>
          <Create />
          <Getcomplete setTodolists={setTodolists} />
          <br />

          <div className="  w-[430px] space-y-4 my-3">
            {todolists?.map((todolist: any) => (
              <div
                key={todolist.id}
                className="flex justify-between items-center h-[35px] border rounded-md  bg-gray-200 text-gray-700 py-7 shadow-md px-3"
              >
                <div
                  className=" flex justify-between gap-2 cursor-pointer"
                  onClick={() => handleClick(todolist.id, todolist.status)}
                >
                  {todolist.status == "0" ? <Circle /> : <CircleCheckBig />}
                  <h4>{todolist.task}</h4>
                </div>
                {todolist.status == "1" ? (
                  <h1 className=" text-green-500">Complete</h1>
                ) : (
                  <h1 className=" text-orange-600">Todo</h1>
                )}
                <Delete fetchTodos={fetchTodos} todoId={todolist.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
