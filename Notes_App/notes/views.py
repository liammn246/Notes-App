from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Note
import json

def index(request):
    return render(request, 'notes/index.html')

def save_note(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        title = data.get('title')
        image = data.get('image')
        if title and image:
                Note.objects.create(title=title, image_data=image)
                return JsonResponse({"message": "Saved successfully!"})
        else:
                return JsonResponse({"error": "Missing title or image"}, status=400)
    return JsonResponse({"error": "Invalid method"}, status=405)