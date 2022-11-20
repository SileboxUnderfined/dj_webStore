from django.contrib.auth.models import User
from django.db import models
from Products.models import Product

class Order(models.Model):
    summ = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    products = models.ManyToManyField(Product)