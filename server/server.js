const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const userdb = JSON.parse(fs.readFileSync('./server/users.json', 'UTF-8'));

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

function isAuthenticated({ username, password }){
  return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
}

server.post('/auth/register', (req, res) => {
  const { username, password } = req.body;

  if(isAuthenticated({ username, password }) === true) {
    const status = 401;
    const message = 'Username and Password already exist';
    res.status(status).jsonp({ status, message });
    return;
  }

  fs.readFile("./server/users.json", (err, data) => {  
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length-1].id;
    const newUser = {
      id: last_item_id + 1,
      username,
      password,
    }

    data.users.push(newUser);

    fs.writeFile("./server/users.json", JSON.stringify(data), (err, result) => {
      res.status(200).jsonp(newUser)

      if (err) {
        const status = 401
        const message = err
        res.status(status).jsonp({ status, message })
        return
      }
    });
  });

})

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {  
  const { username, password } = req.body;
  const userIndex = isAuthenticated({username, password});
  if (!userIndex) {
    res.status(400).jsonp({
      message: 'Incorrect username or password!'
   });
   return
  } else {
    const user = userdb.users.find(user => user.username === username && user.password === password); 
    console.log(user);
    res.status(200).jsonp(user);
    return
  }
});

server.use(router); 
server.listen(3000, () => {
  console.log('Run Auth API Server')
});
