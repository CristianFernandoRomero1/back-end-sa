import { getConnection } from "../../database/connection";
export const inspectionList = async(req, res) => { //lista de inspecciones
 
    const pool = await getConnection();
    
    const result = await pool.request().query("SELECT * FROM inspeccion");
    //WHERE INSPECTORES_id = '" + req.body.data.username + "' AND password = '" + req.body.data.password + "'"
    console.log(result.recordset);
    if(result.recordset.length > 0){
        //res.send(result.recordset);
        //res.status(200).end();
        res.status(200).json({data:result.recordset});


    }
    else{
        res.status(404).json({message:"No se encontro el usuario"});
    }
    //console.log(result);igit
    //res.send(result);
} 