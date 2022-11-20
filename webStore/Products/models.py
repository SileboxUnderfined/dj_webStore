from django.db import models

class Type(models.Model):
    name = models.CharField(max_length=30)

class Product(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    type = models.ForeignKey(Type, on_delete=models.CASCADE, null=True)
    price = models.IntegerField()