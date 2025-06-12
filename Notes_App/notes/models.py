from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=255)
    image_data = models.TextField() #Stores base64 string idk what is
    created = models.DateTimeField(auto_now_add=True)
