from django.shortcuts import redirect, render
from .models import formAtividade

# Create your views here.

def index(request):
    dados=formAtividade.objects.all()
    context={"dados":dados}
    return render(request, "index.html", context)

def dados(request):
    if request.method=="POST":
        name = request.POST.get('name')
        adress = request.POST.get('adress')
        phone = request.POST.get('phone')
        date = request.POST.get('date')
        query=formAtividade(name=name, adress=adress, phone=phone, date=date)
        query.save()
        return redirect('/')
    return render(request, "index.html")