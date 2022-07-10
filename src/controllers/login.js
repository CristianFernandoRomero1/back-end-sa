import { getConnection } from "../database/connection";
export const user = async(req, res) => {
    console.log(req.body);
    const pool = await getConnection();
    
    const result = await pool.request().query("SELECT * FROM tablausuarios WHERE usuario = '" + req.body.data.username + "' AND password = '" + req.body.data.password + "'");
    console.log(result.recordset);
    if(result.recordset.length > 0){
        //res.send(result.recordset);
        res.status(200).end();

    }
    else{
        res.status(404).json({message:"No se encontro el usuario"});
    }
    //console.log(result);igit
    //res.send(result);
} 