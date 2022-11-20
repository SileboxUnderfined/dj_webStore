from rest_framework.serializers import ModelSerializer

from Products.models import Product, Type


class TypeSerializer(ModelSerializer):
    class Meta:
        model = Type
        fields = ['id','name']

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ['name','description','price','type']