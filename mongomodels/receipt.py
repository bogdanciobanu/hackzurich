from mongoengine import Document,  FloatField, ListField, IntField, StringField

class Receipt(Document):

    meta = {'collection': 'receipts'}

    migros_id = StringField(required=True, unique=True)
    client_id = StringField(required=True)
    timestamp = IntField(required=True)
    items = ListField(required=True)
    co2 = FloatField(required=True)