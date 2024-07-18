from django.db import models

class Product(models.Model):

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    categoria = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Registro (models.Model):
    nombre_cliente = models.CharField(max_length=255)
    contraseña_cifrado = models.CharField(max_length=255) #por ahora en formato texto

