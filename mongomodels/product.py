from mongoengine import Document, StringField, FloatField, ListField

INFINITY = 9999999

class Product(Document):

    meta = {'collection': 'products'}

    ean = StringField(max_length=30, required=True, unique=True)
    co2 = FloatField(default=INFINITY)
    image = StringField(max_length=200)
    categories = ListField()
