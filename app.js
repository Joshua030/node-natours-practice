// const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();

//MIDDLEWARES
app.use(express.json());
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('Hello form the middleware');
  next();
});

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

///ROUTE HANDLERS

// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: 'sucess',
//     results: tours.length,
//     data: {
//       tours,
//     },
//   });
// };

// const getTour = (req, res) => {
//   console.log(req.params);
//   const paramId = req.params.id * 1;

//   const tour = tours.find(({ id }) => id === paramId);
//   if (!tour)
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid Id',
//     });
//   res.status(200).json({
//     status: 'sucess',
//     data: {
//       tour,
//     },
//   });
// };

// const createTour = (req, res) => {
//   // console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1;
//   const createTour = { id: newId, ...req.body };
//   // const newTour = Object.assign({id: newId}, req.body)
//   tours.push(newTour);

//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
//   // res.send('Done');
// };

// const updateTour = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: '<updated  tour here...>',
//     },
//   });
// };

// const deleteTour = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: '<updated  tour here...>',
//     },
//   });
// };

// const getAllUsers = (req, res) => {
//   res.status(500).json({
//     status: 'eror',
//     message: 'This Route is not yet defined',
//   });
// };

// const getUser = (req, res) => {
//   res.status(500).json({
//     status: 'eror',
//     message: 'This Route is not yet defined',
//   });
// };

// const createUser = (req, res) => {
//   res.status(500).json({
//     status: 'eror',
//     message: 'This Route is not yet defined',
//   });
// };

// const updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'eror',
//     message: 'This Route is not yet defined',
//   });
// };

// const deleteUser = (req, res) => {
//   res.status(500).json({
//     status: 'eror',
//     message: 'This Route is not yet defined',
//   });
// };

///////////ROUTES


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

/////////Routing Normally

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id',getTour );

// app.post('/api/v1/tours', createTour);

// app.patch('/api/v1/tours/:id',updateTour );
// app.delete('/api/v1/tours/:id',deleteTour );

////////Compact Routing

// app.route('/api/v1/tours').get(getAllTours).post(createTour);

// app
//   .route('/api/v1/tours/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

// app.route('/api/v1/users').get(getAllUsers).post(createUser);

// app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

//STAR SERVER
// const port = 3000;
// app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;