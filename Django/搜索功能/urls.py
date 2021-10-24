
from django.urls import path
from . import views

app_name = 'demo'

urlpatterns = [
    path('', views.search, name='search'),
    path('handle/', views.handle, name='handle'),
]
