from django.urls import path

from . import views


urlpatterns: list = [
    path(route='', view=views.index, name='index')
]
