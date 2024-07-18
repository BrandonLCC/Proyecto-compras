from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index.html'),
    path('products/', views.product_list, name='product_list'),
    path('raw/', views.raw_product_list, name='raw_product_list'),
    path('registro/', views.Registro_cliente, name='Registro_cliente'),
    path('inicio/', views.inicio_sesion, name='inicio_sesion.html'),
    path('Carro/<int:pk>/', views.Carro_compra, name='Carro_compra'),

]


