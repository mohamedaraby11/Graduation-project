from asyncio.windows_events import NULL
from dataclasses import fields
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from backendapi.models import Siteclient,Doctors,Booking_offline,order_medicine,med_orederd
from backendapi.serializers import SiteClientSerializer,DocotrdSerializer,DateSerializer,MedicineSerializer,Medi_orederdSerializer


@csrf_exempt
def make_an_app(request):
    if request.method == 'POST':
        date_detia = JSONParser().parse(request)
        date_serializer = DateSerializer(data=date_detia)
        if date_serializer.is_valid():
            date_serializer.save()
            return JsonResponse("Successfully booked your aapionment", safe=False)
        return JsonResponse("Faild to booked your aapionment",safe=False)

@csrf_exempt
def make_an_order(request):
    if request.method == 'POST':
        date_detia = JSONParser().parse(request)
        date_serializer = Medi_orederdSerializer(data=date_detia)
        if date_serializer.is_valid():
            date_serializer.save()
            return JsonResponse("Successfully booked your aapionment", safe=False)
        return JsonResponse("Faild to booked your aapionment",safe=False)



@csrf_exempt
def med_order(request):
    if request.method == 'POST':
        user_data =JSONParser().parse(request)
        username = user_data['cl_name']
        dates= med_orederd.objects.all().filter(cl_name = username);
        dates_serializer = Medi_orederdSerializer(dates,many=True)
        return JsonResponse(dates_serializer.data,safe=False)    

@csrf_exempt
def get_app(request):
    if request.method == 'POST':
        user_data =JSONParser().parse(request)
        userID = user_data['cl_id']
        dates= Booking_offline.objects.all().filter(UserId = userID);
        dates_serializer = DateSerializer(dates,many=True)
        return JsonResponse(dates_serializer.data,safe=False)

@csrf_exempt
def getappperdr(request):
    if request.method == 'POST':
        user_data =JSONParser().parse(request)
        username = user_data['doc_name']
        dates= Booking_offline.objects.all().filter(doct_name = username);
        dates_serializer = DateSerializer(dates,many=True)
        return JsonResponse(dates_serializer.data,safe=False)


@csrf_exempt
def clientapi(request,id=0):
    if request.method=='GET':
        clints = Siteclient.objects.all()
        clints_serializer = SiteClientSerializer(clints, many=True)
        return JsonResponse(clints_serializer.data,safe=False)
    elif request.method=='POST':
        clint_data=JSONParser().parse(request)
        clints_serializer=SiteClientSerializer(data=clint_data)
        if clints_serializer.is_valid():
            clints_serializer.save()
            return JsonResponse("Successfully created new account", safe=False)
        return JsonResponse("Faild to create new account",safe=False)
    elif request.method=='PUT':
        clint_data=JSONParser().parse(request)
        clint=Siteclient.objects.get(UserId=clint_data['UserId'])
        clints_serializer=SiteClientSerializer(clint,data=clint_data)
        if clints_serializer.is_vaild():
            clints_serializer.save()
            return JsonResponse("update Successfully", safe=False)
        return JsonResponse("Failed to update", safe=False)
    elif request.method=='DELETE':
        clint = Siteclient.objects.get(UserId=id)
        clint.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def SaveeFile(request):
    file=request.FILES['file']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)

#login API
@csrf_exempt
def clientlogin(request):
    if request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_mail = user_data['Useremail']
        logeduser = {}
        user_pass = user_data['UserPassword']
        clint = Siteclient.objects.all().filter(Useremail= user_mail)
        for p in clint:
            if  p.UserPassword == user_pass:
                logeduser ={
                    'username':p.Userfullname,
                    'userID':p.UserId,
                    'checkuser':True,
                }
                return JsonResponse(logeduser, safe=False)
        logeduser = {'username':'', 'userID':'','checkuser':False, }
        return JsonResponse(logeduser, safe=False)


@csrf_exempt
def book_cat(request):
    if request.method=='GET':
        cat_list = ["please select a Category"]
        doctors = Doctors.objects.all()
        for cat in doctors:
            cat_list.append(cat.DoctorCategory)
        
        cat_list = list(dict.fromkeys(cat_list))
        return JsonResponse(cat_list,safe=False)


@csrf_exempt
def doc_per_cat(request):
    if request.method == 'POST':
        user_cat = JSONParser().parse(request)
        user_c = user_cat['DoctorCategory']
        doc_list = ["please select a doctor"]
        doc = Doctors.objects.all().filter(DoctorCategory= user_c)
        for p in doc:
           doc_list.append(p.Doctorfullname) 
        return JsonResponse(doc_list, safe=False)


@csrf_exempt
def doctorapi(request,id=0):
    if request.method=='GET':
        doctors = Doctors.objects.all()
        doctors_serializer = DocotrdSerializer(doctors, many=True)
        return JsonResponse(doctors_serializer.data,safe=False)
    elif request.method=='POST':
        doctor_data=JSONParser().parse(request)
        doctors_serializer=DocotrdSerializer(data=doctor_data)
        if doctors_serializer.is_valid():
            doctors_serializer.save()
            return JsonResponse("Successfully created new account", safe=False)
        return JsonResponse("Faild to create new account",safe=False)
    elif request.method=='PUT':
        doctor_data=JSONParser().parse(request)
        doctor=Doctors.objects.get(UserId=doctor_data['UserId'])
        doctors_serializer=doctors_serializer(doctor,data=doctor_data)
        if doctors_serializer.is_vaild():
            doctors_serializer.save()
            return JsonResponse("update Successfully", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
@csrf_exempt
def SaveeFile(request):
    file=request.FILES['file']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)


#login API
@csrf_exempt
def doctorlogin(request):
    if request.method == 'POST':
        doctor_data = JSONParser().parse(request)
        DoctorPhoneNumber_ = doctor_data['DoctorPhoneNumber']
        doc_name = NULL 
        doctor_pass = doctor_data['DoctorPassword']
        doctor = Doctors.objects.all().filter(DoctorPhoneNumber= DoctorPhoneNumber_)
        for p in doctor:
            if  p.DoctorPassword == doctor_pass:
                doc_name = p.Doctorfullname
        return JsonResponse(doc_name, safe=False)



@csrf_exempt
def get_medicine(request):

    if request.method=='POST':
        mid_data=JSONParser().parse(request)
        mid_serializer=Medi_orederdSerializer(data=mid_data)
        if mid_serializer.is_valid():
            mid_serializer.save()
            return JsonResponse("Successfully Add this Medicen to your account", safe=False)
        return JsonResponse("Faild to Add this Medicen to your account",safe=False)
    
    if request.method=='GET':
        medicine = order_medicine.objects.all()
        medicine_serializer = MedicineSerializer(medicine, many=True)
        return JsonResponse(medicine_serializer.data,safe=False)      



@csrf_exempt
def get_medicineperuser(request):    
    if request.method == 'POST':
        user_data =JSONParser().parse(request)
        userID = user_data['cl_Id']
        dates= med_orederd.objects.all().filter(cl_Id = userID);
        dates_serializer = Medi_orederdSerializer(dates,many=True)
        return JsonResponse(dates_serializer.data,safe=False)