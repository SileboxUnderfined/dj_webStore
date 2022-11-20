from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from Products.models import Product, Type
from Products.serializer import ProductSerializer, TypeSerializer


class TypeSetView(ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer


class ProductSetView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


def products_page(request):
    return render(request, 'products.html')
