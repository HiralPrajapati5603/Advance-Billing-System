from django import forms
from .models import OrganisationDetails,CustomerDetails,Invoice_Details,Product
# from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.models import User

class CustomerForm(forms.ModelForm):
    class Meta:
        model = CustomerDetails
        fields = '__all__'


class OrganisationForm(forms.ModelForm):
    class Meta:
        model = OrganisationDetails
        fields = '__all__'

#============== Form 1 - Invoice Details ============>

class Invoice_Details_Form(forms.ModelForm):

    class Meta:
        model = Invoice_Details
        fields = '__all__'

#============== Form 2 - Product Details ============>

class Product_Form(forms.ModelForm):

    class Meta:
        model = Product
        exclude = ['']
