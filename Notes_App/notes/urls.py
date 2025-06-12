from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('save-note/', views.save_note, name='save_note'),
]