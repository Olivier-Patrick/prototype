const express = require('express');
const path = require('path');
const app = express();
var tab=[2500,2500,2500,2500,2000,4000,8000];
global.tab;
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  
});
app.post('/test', (req, res) => {
 tab=req.body.atrib

 console.log(tab)
});

app.get('/rest2', (req, res) => {
 
  res.send(tab)
  console.log(tab)
  //console.log(JSON.stringify({user :tab}))
 });

app.listen(3000);
console.log("serveur is running on port 3000")