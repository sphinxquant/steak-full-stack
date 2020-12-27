import express from 'express';
// rest of the code remains same


const CreateServer = (clientPath: string) => {
    const app = express();
    const PORT = 8000;
    
    app.use(express.static(clientPath));

    // app.get('/', (req, res) => {
    //     console.log('message recieved');
    //     res.send('Express + TypeScript Server');
    // });
    
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
}

export default CreateServer;



