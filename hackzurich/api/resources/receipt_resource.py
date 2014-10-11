import time
import json
from mongomodels.receipt import Receipt
from django.http import HttpResponse
from tastypie_mongodb.resources import MongoDBResource
from tastypie import fields

class ReceiptResource(MongoDBResource):
    id = fields.CharField(attribute='_id')
    migros_id = fields.CharField(attribute='migros_id')
    timestamp = fields.IntegerField(attribute='timestamp')
    items = fields.ListField(attribute='items')
    co2 = fields.FloatField(attribute='co2')

    class Meta:
        queryset = Receipt.objects.all()
        allowed_methods = ('get')
        resource_name = 'receipt'
        filtering = {}

        collection = 'receipts'

    def get_collection(self):
        return Receipt._get_collection()

    def obj_get(self, pk, bundle):
        from ipdb import set_trace; set_trace()

    def get_data(self):
        from ipdb import set_trace; set_trace()

    def get_list(self, request, **kwargs):
        from ipdb import set_trace; set_trace()
        if 'client_id' not in request.GET:
            raise Exception('No receipt_id specified')

        client_id = request.GET['client_id']
        until = request.GET.get('until', int(time.time()))
        since = request.GET.get('since', until - 100 * 86400)

        return HttpResponse(json.dumps([self._convert_document_to_dict(rec) for rec in Receipt.objects.filter(client_id=client_id, timestamp__gte=since,
                            timestamp__lte=until)]),
                            content_type='application/json')

    def _convert_document_to_dict(self, document):
        result = {}
        for field in document._fields.keys():
            if field == '_id' or field == 'id':
                continue
            if document[field]:
                result[field] = document[field]
        print result
        return result