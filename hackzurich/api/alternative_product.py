from mongomodels.product import Product
from mongomodels.receipt import Receipt
from django.http import HttpResponse


def generate_alternatives(request, **kwargs):
    try:
        client_id = kwargs['client_id']
    except Exception.KeyError:
        raise Exception("You should pass a client_id.")
    receipts = Receipt.objects.filter(client_id=client_id)
    products = {}
    for receipt in receipts:
        for item in receipt['items']:
            if not item in products:
                print item
                product = Product.objects.get(ean=item)
                products[item] = {'co2': product.co2,
                                  'appearances': 1,
                                  'categories': product.categories}
            else:
                products[item]['appearance'] += 1

    # Convert the dict in list
    products_copy = products
    products = []
    for ean, product in products_copy.iteritems():
        products.append(product.update({'ean': ean}))

    suggestions = []
    for product in products:
        precisest_category = products.categories.sort()[-1]
        similar_products = Product.objects.filter(categories__contains=precisest_category,
                                                  co2__lte=product.co2).order_by('-co2')
        if len(similar_products) > 0:
            similar_product = similar_products[0]
            suggestions.append({'worst': product, 'better': similar_product})

    suggestions = sorted(suggestions,
                         key=lambda pair: pair['better']['co2'] - pair['worst']['co2'])

    suggestions = suggestions[:10]
    return HttpResponse(suggestions, content_type='application/json')




