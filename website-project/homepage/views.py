from django.shortcuts import render
from .models import HomePage

def home(request):
    jobs = HomePage.objects
    return render(request, 'index.html', {'jobs': jobs})
