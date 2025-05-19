import './App.css'
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handlePage = (e) => {
    e.preventDefault();

    if (!description || !taskName) return;
    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex
          ? { ...task, name: taskName, description, status: "pending" }
          : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([
        ...tasks,
        { name: taskName, description, status: "pending" },
      ]);
    }
    setTaskName("");
    setDescription("");
  };
  // Handle task deletion
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Handle task update (edit)
  const handleUpdate = (index) => {
    setTaskName(tasks[index].name);
    setDescription(tasks[index].description);
    setEditIndex(index);
  };

  // Handle task completion
  const handleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: "completed" } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className='max-w-screen' >
        <h1 className="text-red-500 text-6xl font-bold"> To-Do Task</h1>
        <div className=' grid grid-cols-[30%_auto]   p-2 gap-4'>

          <div className=' mt-12 bg-white  min-h-full   '>
            <h2 className='text-[20px] font-medium mt-6' >Task-Form</h2>
            <div className='bg-white p-8 rounded-md '>
              <form onSubmit={handlePage}>
                <input type='text' placeholder='Enter name your task'
                  className=' rounded-md border border-gray-300 size-10 w-full mt-2 p-5 '
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)} />

                <textarea cols={50} rows={6} placeholder='description of your task'
                  className=' rounded-md border border-gray-300  w-full mt-2 p-5 '
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button className='bg-gray-400 text-xl border  mt-2 p-2 w-full
                 rounded-md  font-medium hover:bg-green-500'>Submit
                </button>
              </form>
            </div>
          </div>

          <div className=' mt-12 p-4 bg-white  min-h-full'>
            <h1 className='text-[20px] font-medium'>Task-List </h1>
            <div className='bg-white p-1  rounded-md flex justify-center items-center gap-4 mt-2 ' >
              <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Task</th>
                    <th
                      scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Description</th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >Delete</th>
                    <th
                      scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Update</th>
                    <th
                      scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">pending</th>
                  </tr>

                </thead>

                <tbody>
                  {tasks.map((task, index) => (
                    <tr
                      key={index}
                      className={`${task.status === "completed"
                          ? "bg-green-100"
                          : "bg-gray-100"
                        }`}
                    >
                      <td className="p-2">{task.name}</td>
                      <td className="p-2">{task.description}</td>
                      <td className="p-2">
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="p-2">
                        <button
                          onClick={() => handleUpdate(index)}
                          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                        >
                          Update
                        </button>
                      </td>
                      <td className="p-2">
                        {task.status === "pending" ? (
                          <button
                            onClick={() => handleComplete(index)}
                            className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                          >
                            Complete
                          </button>
                        ) : (
                          <span className="text-green-600">Completed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
