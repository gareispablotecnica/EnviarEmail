const SQLite= require('sqlite3').verbose();

const path= require('path')
const db_Ubicacion= path.resolve(__dirname,'./db.db')

const db= new SQLite.Database(db_Ubicacion,(Error)=>{
    if(Error){
        console.error('Error en la Creación del Server ⛔')
    }
    else{
        console.log('Base de Datos Creada ✅')
        db.run(
            `
                CREATE TABLE IF NOT EXISTS Email(
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    Email TEXT,
                    Asunto TEXT,
                    Cuerpo TEXT
                )
            `),(Error)=>{
                if(Error){
                    console.error('La Tabla no se Creo ❌')
                }
                else{
                    console.log('La Tabla se Creo Correctamente ✅')
                }
            }
    }
})

module.exports=db;