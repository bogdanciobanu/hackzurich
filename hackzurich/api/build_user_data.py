from core.migros_api_client import MigrosApiClient, RateLimit
from mongomodels.product import Product
from mongomodels.receipt import Receipt

from django.http import HttpResponse


def build_user_data(request, **kwargs):
    try:
        client_id = kwargs['client_id']
    except Exception.KeyError:
        raise Exception("You should pass a client_id.")

    api = MigrosApiClient()
    receipts = api.get_receipts_for_client_id(client_id)
    print len(receipts)
    for receipt_id in receipts:
        new_receipt = Receipt(migros_id=receipt_id,
                              timestamp=receipts[receipt_id]['timestamp'],
                              items=receipts[receipt_id]['items'],
                              co2=receipts[receipt_id]['co2'],
                              client_id=receipts[receipt_id]['client_id'])
        new_receipt.save()
        print 'posibile'
        print (new_receipt.items)
        for item_id in new_receipt.items:
            print 'filtrare'
            print Product.objects.filter(ean=item_id)
            if len(Product.objects.filter(ean=item_id)) != 0:
                continue
            try:
                item = api.get_product(item_id)
            except RateLimit:
                break
            product = Product(ean=item_id,
                              categories=item['categories'])
            if 'image' in item:
                product.image = item['image']
            if 'co2' in item:
                product.co2 = item['co2']
            product.save()
            print 'salvat'
            print product.ean

    return HttpResponse({})