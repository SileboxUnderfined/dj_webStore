from rest_framework.serializers import ModelSerializer

from Orders.models import Order


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = ['summ','user','products']