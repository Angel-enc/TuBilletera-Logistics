from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False) # 200 por el encriptado
    is_active = db.Column(db.Boolean(), default=True)
    clients = db.relationship('Client', backref='user', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
        }

class Client(db.Model):
    __tablename__= 'client'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    expenses = db.relationship('Expense', backref='client', lazy=True)

class Expense(db.Model):
    __tablename__= 'expense'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(250))
    amount = db.Column(db.Float)
    #Guardamos lo que extraiga el OCR
    ocr_text = db.Column(db.Text, nullable=True)
    image_url = db.Column(db.String(250), nullable=True)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'),nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "description" : self.description,
            "amount": self.amount,
            "ocr_text": self.ocr_text
        }

