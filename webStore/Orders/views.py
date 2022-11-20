from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from Orders.models import Order
from Orders.serializer import OrderSerializer


class OrdersSetView(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


def orders_page(request):
    return render(request, 'orders.html')
