from django.urls import re_path as url
from backendapi import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
     url(r'^clint$',views.clientapi),
     url(r'^med$',views.get_medicine),
     url(r'^doccat$',views.book_cat),
     url(r'^docpercat$',views.doc_per_cat),
     url(r'^bookapp$',views.make_an_app),
     url(r'^getapp$',views.get_app),
     url(r'^getmedperclient$',views.get_medicineperuser),
     url(r'^getappperdr$',views.getappperdr),
     url(r'^clint/([0-9]+)$',views.clientapi),
     url(r'^clint/savefile', views.SaveeFile),
     url(r'^clint/login', views.clientlogin),
     url(r'^doctor$',views.doctorapi),
     url(r'^doctor/([0-9]+)$',views.doctorapi),
     url(r'^doctor/savefile', views.SaveeFile),
     url(r'^doctor/login', views.doctorlogin)
 
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
 
 
 
  