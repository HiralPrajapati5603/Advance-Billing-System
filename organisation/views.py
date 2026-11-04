from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect
from .models import OrganisationDetails,CustomerDetails,Invoice_Details,Product
from .forms import OrganisationForm,CustomerForm,Invoice_Details_Form,Product_Form
from django.urls import reverse_lazy
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
from io import BytesIO
from django.shortcuts import get_object_or_404
from django.urls import reverse
from django.core.files.base import ContentFile
import qrcode







def OrganisationView(request):
    forms = OrganisationForm(request.POST or None)
    return render(request,'signup.html',{'org':forms})

def LoginView(request):
    
    return render(request,'registration/login.html')

def index(request):  
    
    return render(request,'index.html')

    
# Customer Data ---------------
   
def CustomerView(request):
        return render(request,'customer.html')

def CustomerFormView(request):
    return render(request,'customerform.html')


    
def CustomerUpdate(request):  
    return render(request,'customerform.html')

# Invoice Data ---------------

def Total_Invoice_Page(request):
    return render(request,'Total_Invoice_Page.html')


def InvoiceView(request):
    return render(request,'temp_invoice.html')
   
def InvoicePage(request):
    return render(request,'invoice_list.html')
    
    
    
def DetailPage(request, invoice_id):

    invo = get_object_or_404(Invoice_Details, id=invoice_id)

    prod = Product.objects.filter(Invoice=invo)

    cust = invo.Cust_name

    tot = sum(float(i.Total or 0) for i in prod)

    return render(request, 'DetailPage.html', {
        'invo': invo,
        'prod': prod,
        'cust': cust,
        'tot': tot,
    })


def InvoiceForm(request):
        return render(request,'invoiceform.html')

    
def InvoiceUpdate(request):
        return render(request,'invoiceform.html')


def ProductView(request):
    return render(request,'temp_product.html')


def ProductForm(request):
        return render(request,'productform.html')
    
def ProductUpdate(request):
    return render(request,'productform.html')

def logout(request):
    return redirect('login')

def GeneratePDF(request, invoice_id):

    invo = get_object_or_404(Invoice_Details, id=invoice_id)

    prod = Product.objects.filter(Invoice=invo)

    cust = invo.Cust_name

    company = invo.companyName

    tot = sum(float(i.Total or 0) for i in prod)

    template = get_template('invoice_pdf.html')

    html = template.render({
        'invo': invo,
        'prod': prod,
        'cust': cust,
        'company': company,
        'tot': tot,
    })

    response = HttpResponse(content_type='application/pdf')

    response['Content-Disposition'] = (
        f'inline; filename="Invoice_{invo.Invoice_num}.pdf"'
    )

    pdf_status = pisa.CreatePDF(html, dest=response)

    if pdf_status.err:
        return HttpResponse('PDF generation failed')

    return response


def GenerateQR(request, invoice_id):

    invo = get_object_or_404(Invoice_Details, id=invoice_id)

    invoice_url = request.build_absolute_uri(
        reverse('detailpage', args=[invo.id])
    )

    qr = qrcode.make(invoice_url)

    buffer = BytesIO()

    qr.save(buffer, format='PNG')

    file_name = f'invoice_{invo.Invoice_num}.png'

    invo.qrcode.save(
        file_name,
        ContentFile(buffer.getvalue()),
        save=True
    )

    return redirect('detailpage', invoice_id=invo.id)