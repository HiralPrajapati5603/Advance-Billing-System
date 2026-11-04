from django.db import models
# from django.contrib.auth.models import AbstractUser

# from django.contrib.auth.models import User

class OrganisationDetails(models.Model):
    company_name = models.CharField(max_length=50)
    company_type = models.CharField(max_length=50)
    pan_number = models.CharField(max_length=10)
    gstin_number = models.CharField(max_length=15)
    address_1 = models.CharField(max_length=90)
    address_2 = models.CharField(max_length=90)
    state = models.CharField(max_length=60)
    city = models.CharField(max_length=60)
    pincode = models.CharField(max_length=6)
    full_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    email  = models.EmailField()
    user_id = models.CharField(max_length=40)
    password_1 = models.CharField(max_length=40)
    password_2 = models.CharField(max_length=40)

    def __str__(self):
        
        return self.company_name    

class CustomerDetails(models.Model):
    companyName = models.ForeignKey(OrganisationDetails, on_delete=models.CASCADE,default="")
    cust_name = models.CharField(max_length=50,verbose_name='Customer Name')
    cont_person = models.CharField(max_length=50,verbose_name='Contact Person')
    contact_num = models.IntegerField(verbose_name='Contact Number')
    email = models.CharField(max_length=50,default="")
    company_type = models.CharField(verbose_name='Company Type',max_length = 50)
    address = models.CharField(max_length=90,verbose_name='Address Line 1')
    address_2 = models.CharField(max_length=90,verbose_name='Address Line 2')
    landmark = models.CharField(max_length=50,verbose_name='Landmark')
    country = models.CharField(max_length=50,verbose_name='Country')
    state = models.CharField(max_length=50,verbose_name='State')
    city = models.CharField(max_length=50,verbose_name='City')
    pincode = models.IntegerField(verbose_name='Pincode')

    def __str__(self):
        return self.cust_name  


#--------------------------Invoice Page------------------->

#============= Model 1 - Invoice Details ===================>

class Invoice_Details(models.Model):
    companyName = models.ForeignKey(OrganisationDetails, on_delete=models.CASCADE,default="")
    Cust_name = models.ForeignKey(CustomerDetails, on_delete=models.CASCADE,default="")
    Invoice_type = models.CharField(max_length = 50)
    Invoice_num = models.CharField(max_length = 10)
    Date = models.DateField(auto_now=False,blank=True)
    Dispatch_through = models.CharField(max_length = 50)
    Due_date = models.DateField(auto_now=False,blank=True)
    Bank = models.CharField(max_length = 20)
    Payment_type = models.CharField(max_length = 20)
    Payment_note = models.TextField(max_length=50)
    T_c = models.TextField(max_length=100)
    Document_note = models.TextField(max_length=100)
    qrcode = models.ImageField(upload_to="", default="", blank=True)
    
    def __str__(self):
        return self.Invoice_num

#===========================================================>

#============== Model 2 - Product Details ==================>
class Product(models.Model):
    companyName = models.ForeignKey(OrganisationDetails, on_delete=models.CASCADE,default="")
    Invoice = models.ForeignKey(Invoice_Details, on_delete=models.CASCADE,default="")
    Product_name = models.CharField(max_length = 50)
    Hsn_code = models.CharField(max_length = 20)
    Qty = models.IntegerField()
    Price = models.IntegerField()
    Discount = models.IntegerField()
    Cgst = models.IntegerField()
    Sgst = models.IntegerField()
    Igst = models.IntegerField()
    Cess = models.IntegerField()
    Total = models.FloatField()
    
    def __str__(self):
        return self.Product_name
#----------------------------------------------------------
    
