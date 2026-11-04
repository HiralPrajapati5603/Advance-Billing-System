from django.contrib import admin
from .models import OrganisationDetails,CustomerDetails,Invoice_Details,Product
from django.contrib.auth import get_user_model


admin.site.site_header = 'Billing Administration'                    # default: "Django Administration"
admin.site.index_title = 'Admin Panel'                 # default: "Site administration"
admin.site.site_title = 'Administration'

class OrganisationAdmin(admin.ModelAdmin):
    model = OrganisationDetails
    list_display = ['company_name','city','email']

class CustomerDetailsAdmin(admin.ModelAdmin):
    list_display = ['cust_name','contact_num','state']
    
admin.site.register(CustomerDetails,CustomerDetailsAdmin)
admin.site.register(OrganisationDetails,OrganisationAdmin)
admin.site.register(Invoice_Details)
admin.site.register(Product)
