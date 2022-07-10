import sql from 'mssql';
const dbSettings = {
    user: 'cristian',
    password: '1234',
    server: 'GWTN141-10',
    database: 'ESSA.BD.CVIDA.INSPECCIONES_TEST',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}
export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;

    }
catch (err) {
    console.error(err);
}
}

//sql.connect(dbSettings)