from django.conf.urls import patterns, include, url
from django.contrib import admin

from api.resources.receipt_resource import ReceiptResource


receipt_resource_api = ReceiptResource()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'hackzurich.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += patterns('hackzurich.api.build_user_data',
                        url(r'^api/1.0/(?P<client_id>.*)/build_data', 'build_user_data'))
urlpatterns += patterns('',
                        (r'^api/', include(receipt_resource_api.urls)),
                         )