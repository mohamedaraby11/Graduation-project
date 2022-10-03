from dataclasses import field, fields
from multiprocessing.connection import Client
from pyexpat import model
from rest_framework import serializers
from backendapi.models import Siteclient,Doctors,SiteAdmin,Booking_offline,order_medicine,med_orederd

class SiteAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model=SiteAdmin
        fields=('Username','Password','AdminName')
        
class  Medi_orederdSerializer(serializers.ModelSerializer):
    class Meta:
        model=med_orederd
        fields=('cl_Id','drug_name','drug_price','drug_category','drug_desc')

class SiteClientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Siteclient
        fields=('Userfullname','UserId','Useremail','Userage','Usergender','UserPhoneNumber','UserAddress','UserPassword','UserProfile')
        
class DateSerializer(serializers.ModelSerializer):
    class Meta:
        model =Booking_offline
        fields=('department','doct_name','cl_name','UserId' ,'cl_pnumber','b_date','b_time','onLineMeeting','roomName')

class DocotrdSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doctors
        fields=('Doctorfullname','DoctorAddress','DoctorCategory','DoctorNationalID_front','DoctorNationalID_back','DoctorPassword','DoctorPhoneNumber')

class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model=order_medicine
        fields=('drug_name','drug_price','drug_category','drug_desc','drug_amount','drug_form','drug_code')