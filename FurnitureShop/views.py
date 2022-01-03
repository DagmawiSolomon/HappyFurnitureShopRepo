from django.conf import settings
from django.core.mail import send_mail
from django.http import BadHeaderError, HttpResponse
from django.shortcuts import render, redirect
from .models import Product
from .forms import EmailForm


def home(request):
    # gets product info from the database
    products = Product.objects.all()
    for p in products:
        # sends email
        if request.method == "POST":
            form = EmailForm(request.POST)
            if form.is_valid():
                subject = "Inquiry"
                body = {
                    'first_name': form.cleaned_data['first_name'],
                    'phone_number': form.cleaned_data['phone_number'],
                    'email': form.cleaned_data['email'],
                    'message': form.cleaned_data['message'],
                }
                message = "\n".join(body.values())

                try:
                    send_mail(subject, message,form.cleaned_data['email'], ['contacthappyfurnitureshop@gmail.com'])
                except BadHeaderError:
                    return HttpResponse('Invalid header found.')
                return redirect("/")
        form = EmailForm()

    context = {'products': products, "form": form}
    return render(request, "FurnitureShopApp/index.html", context)

