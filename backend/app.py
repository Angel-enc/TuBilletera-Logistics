import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from models import db, User

app= Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tubilltera.db'
app.config['JWT_SECRETY_KEY'] = 'mi-clave-logistics-2024' #en produccion usar .env
CORS(app)

bcrypt = Bcrypt(app)
jwt = JWTManager(app)
db.init_app(app)

#Crear BBDD automáticamente
with app.app_context():
    db.create_all()

#---RUTAS DE AUTENTICACION---

@app.route('/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    #Encriptamos la pass antes de guardarla
    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(email=data['email'], password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "Usuario registrado en TuBilletera Logistics"}), 201

@app.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if user and bcrypt.check_password_hash(user.password, data['password']):
        token = create_access_token(identity=str(user.id))
        return jsonify({"token": token, "user_id": user.id}), 200

    return jsonify({"msg": "credenciales inválidas"}), 401

if __name__ == '__main__':
    app.run(host= '0.0.0.0', port=5000, debug=True)