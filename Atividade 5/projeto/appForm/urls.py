from django.urls import path
from appForm import views

urlpatterns = [
    path('', views.index, name="index"),
    path('dados', views.dados, name="dados"),
]