const e = require('express')
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//---------

// Creation endpoint
app.post('/platforms/:platform/:resource', (req, res) => {
  let platform = req.params.platform;
  let resourceAction = `${req.params.resource}Create`;
  let actionPath = `./platforms/${platform}/actions/${resourceAction}.js`

  // Handle missing platform/action as a 404 response
  if(!fs.existsSync(actionPath)) {
    console.log('Missing module action: ' + actionPath)
    res.status(404).send('Cant find this')
  } else {
    // Othwewise load the action and get going!
    try {
      let actionClass = require(actionPath)
      let responsePromise = actionClass.process(req.params);
      res.send(responsePromise)
    } catch (e){
      res.status(422).send(JSON.stringify(e.errors))
    }
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})