from django.shortcuts import render
from .models import Data
from rest_framework import viewsets
from .serializer import DataSerializer



class DataViewSet(viewsets.ModelViewSet):
    serializer_class = DataSerializer
    queryset = Data.objects.all()

def template(request):
    return render(request, 'index.html')
