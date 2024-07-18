from django.shortcuts import render
from .models import Product
from django.db import connection
from django.shortcuts import get_object_or_404, render, redirect


def index(request):
    products = Product.objects.all()
    return render(request, 'index.html', {'products': products})

def product_list(request):
    categoria = request.GET.get('categoria', '')
    
    products = Product.objects.filter(categoria=categoria)
    
    return render(request, 'product_list.html', {'products': products})

def raw_product_list(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM store_product") #mediante el link a y si ID si SELECT * FROM PRODUCTO WHERE CATEGORIA = 1 muestra solo los productos de esa categoria
        products = cursor.fetchall()
    return render(request, 'raw_product_list.html', {'products': products})

def Registro_cliente(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM store_registro") 
        customer = cursor.fetchall()
    return render(request, 'Registro_cliente.html', {'customer': customer})

def Carro_compra(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'Carro_compra.html', {'Product': product})

def inicio_sesion(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM store_registro")
        customer = cursor.fetchall()
    return render(request, 'inicio_sesion.html', {'customer': customer})


