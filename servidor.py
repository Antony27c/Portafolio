from flask import Flask, request
import pyodbc

app = Flask(__name__)

def conectar():
    return pyodbc.connect(
        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=localhost\\SQLEXPRESS;"
        "DATABASE=mi_portafolio;"
        "Trusted_Connection=yes;"
    )

@app.route("/contacto", methods=["POST"])
def guardar_contacto():
    nombre     = request.form["name"]
    email      = request.form["email"]
    telefono   = request.form["telefono"]
    residencia = request.form["residencia"]
    motivo     = request.form["motivo"]
    mensaje    = request.form["mensaje"]
    terminos   = 1 if "Terminos" in request.form else 0

    conexion = conectar()
    cursor = conexion.cursor()
    cursor.execute(
        """INSERT INTO contactos 
        (nombre, email, telefono, residencia, motivo, mensaje, terminos)
        VALUES (?, ?, ?, ?, ?, ?, ?)""",
        (nombre, email, telefono, residencia, motivo, mensaje, terminos)
    )
    conexion.commit()
    conexion.close()

    return "Mensaje enviado correctamente"

if __name__ == "__main__":
    app.run(debug=True)