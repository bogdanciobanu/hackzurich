from calendar import timegm
import dateutil
import random
import requests

from mongomodels.product import Product
from mongomodels.receipt import Receipt

API_URL = 'http://private-anon-6b925091a-hackzurich2014.apiary-proxy.com'


class RateLimit(Exception):
    pass

class MigrosApiClient():
    def get_carbon_print(self, ean):
        # TODO: implement this
        return random.randrange(100)

    def get_product(self, ean):
        result = {}
        response = requests.get(API_URL + '/products/' + ean)
        data = response.json()
        if data == {}:
            raise RateLimit
        result['ean'] = ean
        if 'image' in data and 'custom' in data['image']:
            result['image'] = data['image']['custom']
        result['categories'] = []
        result['co2'] = self.get_carbon_print(ean)
        if 'catPath' in data:
            for category in data['catPath']:
                result['categories'].append(category['id'])
        return result

    def get_pos_data_for_client(self, client_id):
        response = requests.get(API_URL + '/pos/' + client_id)
        return response.json()

    def get_receipts_for_client_id(self, client_id):
        '''
        Args:
            client_id: an id of a Migros client

        Returns:
            A dictionary containing all receipts of a client.
            {
                '1111': {'co2': 15.3,
                         'timestamp: 11111111,
                         'items': [123, 456, 789]
                        }
                ...
            }
        '''
        result = {}
        items_per_session = {}
        data = self.get_pos_data_for_client(client_id)
        for item in data:
            timestamp = timegm(dateutil.parser.parse(item['rDate']).utctimetuple())
            ean = item['migrosEan']
            receipt_id = item['receiptId']

            if receipt_id not in result:
                result[receipt_id] = {'co2': self.get_carbon_print(ean),
                                      'timestamp': timestamp,
                                      'items': [ean],
                                      'client_id': client_id}
            else:
                result[receipt_id]['co2'] += self.get_carbon_print(ean)
                result[receipt_id]['items'].append(ean)
        return result