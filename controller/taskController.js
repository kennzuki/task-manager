

const getAllTasks = (req, res) => {
res.status(200).json({ message: 'Get All Tasks' });
};

const getTask = (req, res) => {
res.status(200).json({ message: 'Get Task' });
};

const setTask = (req, res) => {
res.status(200).json({ message: 'Create Task' });
};

const updateTask = (req, res) => {
res.status(200).json({ message: 'Update Task' });
};

const deleteTask = (req, res) => {
res.status(200).json({ message: 'Delete Task' });
};

export { getAllTasks, getTask, setTask, updateTask, deleteTask };