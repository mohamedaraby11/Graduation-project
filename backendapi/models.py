from operator import index
from pyexpat import model
from django.db import models

class Siteclient(models.Model):
    Userfullname = models.CharField(max_length=500)
    UserId = models.AutoField(primary_key=True)
    Useremail = models.EmailField(null=False)
    Userage = models.IntegerField()
    Usergender = models.CharField(max_length=500)
    UserPhoneNumber = models.CharField(max_length=12)
    UserAddress = models.CharField(max_length=500)
    UserPassword = models.CharField(max_length=500)
    UserProfile = models.CharField(max_length=500)

class Doctors(models.Model):
    Doctorfullname = models.CharField(max_length=500)
    DoctorPhoneNumber = models.CharField(primary_key=True,max_length=12)
    DoctorAddress = models.CharField(max_length=500)
    DoctorCategory = models.CharField(max_length=500)
    DoctorNationalID_front = models.CharField(max_length=500)
    DoctorNationalID_back = models.CharField(max_length=500)
    DoctorPassword = models.CharField(max_length=500)

class SiteAdmin(models.Model):
    Username = models.CharField(max_length=500)
    Password = models.CharField(max_length=500)
    AdminName = models.CharField(max_length=500)

class Booking_offline(models.Model):
    department= models.CharField(max_length=500)
    doct_name = models.CharField(max_length=500)
    cl_name = models.CharField(max_length=500)
    UserId = models.IntegerField()
    cl_pnumber = models.CharField(max_length=500)
    b_date = models.DateField()
    b_time = models.TimeField(null=True)
    id = models.IntegerField(auto_created=True,primary_key=True)
    onLineMeeting=models.CharField(max_length=3 , default="no")
    roomName=models.CharField(max_length=500 , default="")


class order_medicine(models.Model):
    drug_id=models.AutoField(primary_key=True)
    drug_name=models.CharField(max_length=500)
    drug_price=models.CharField(max_length=500)
    drug_category=models.CharField(max_length=500)
    drug_desc=models.CharField(max_length=500)
    drug_amount=models.CharField(max_length=500)
    drug_form=models.CharField(max_length=500)
    drug_code=models.CharField(max_length=500)


class med_orederd(models.Model):
    order_id = models.AutoField(primary_key=True)
    cl_Id = models.CharField(max_length=500)
    drug_name=models.CharField(max_length=500)
    drug_price=models.CharField(max_length=500)
    drug_category=models.CharField(max_length=500)
    drug_desc=models.CharField(max_length=500)
