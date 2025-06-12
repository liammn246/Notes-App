from django.shortcuts import render, redirect, get_object_or_404
from notes.models import Note

def index(request):
    return render(request, 'gallery/gallery.html', {'notes': Note.objects.all()})

def delete_note(request, note_id):
    if request.method == 'POST':
        note = get_object_or_404(Note, id=note_id) #can also use .get(), and catch error
        note.delete()
    return redirect('gallery_home')
