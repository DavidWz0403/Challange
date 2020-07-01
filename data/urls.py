from django.urls import path, include
from . import views
from rest_framework import routers
from .views import DataViewSet
from . import views

router = routers.DefaultRouter()
router.register('data', DataViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('template', views.template)
]