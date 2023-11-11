const express = require('express');
import config from "./config";
const keep_alive = (obj: any = {}) => {
  const app = express();

  const port = 3000;
  app.get('/', (req: any, res: any) => {
    res.status(200).send("bot running..")
    //    res.sendStatus(200)
  })

  app.use(express.json());
  // Endpoint to accept an object
  app.post('/obj', (req: any, res: any) => {
    try {

      const rr = req.body;
      // console.log('Received object:', rr);
      obj["" + rr.id + ""] = {
        text: rr.text
        // name: rr.name
      }

      setTimeout(() => {
        delete obj[rr.id + ""]
      }, 40000)
      // Perform any required operations with the received object

      res.status(200).json({ message: 'Object received successfully' });

    } catch (error: any) {
      res.status(200).json({ message: 'Some error' });
    }
  });

  app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
}
export default keep_alive