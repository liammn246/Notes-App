from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index, name='gallery_home'),
    path('delete/<int:note_id>/', views.delete_note, name='delete_note'),
]