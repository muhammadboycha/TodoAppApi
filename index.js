const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const { connect } = require('./mongodb');
const createUser = require('./controller/userController/createUserController');
const login = require('./controller/userController/loginController');
const createTask = require('./controller/taskController/createTaskController');
const getAllTask = require('./controller/taskController/getAllTaskController');
const getAllTaskByStatus = require('./controller/taskController/getAllTaskByStatusController');
const getTaskById = require('./controller/taskController/getTaskByIdController');
const updateTask = require('./controller/taskController/updateTaskDetailsController');
const statusUpdate = require('./controller/taskController/taskStatusUpdateController');
const taskStart = require('./controller/taskController/taskStartController');
const taskCompleted = require('./controller/taskController/taskCompletedController');
const deleteTask = require('./controller/taskController/deleteTaskController');

const app = express();

const corsOptions ={
    origin: '*',
    method: 'GET,HEAD,OPTIONS,PUT,POST,DELETE',
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/createUser',createUser);
app.post('/login',login);
app.post('/createTask', createTask);
app.get('/getAllTask', getAllTask);
app.post('/getAllTaskByStatus', getAllTaskByStatus);
app.post('/getTaskById', getTaskById);
app.post('/updateTask', updateTask);
app.post('/statusUpdate', statusUpdate);
app.post('/taskStart', taskStart);
app.post('/taskCompleted', taskCompleted);
app.post('/deleteTask', deleteTask);







app.get('*',(req,res)=>{
    res.json({
        status: 404,
        message: 'Your Api route is not Found '
      });
});

app.listen(3001, async()=>{
   await connect();
    console.log('listening on 3001');
});





