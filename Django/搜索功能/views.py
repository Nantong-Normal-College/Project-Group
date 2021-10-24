from django.shortcuts import render
from . import service
from demo.models import Shop
# Create your views here.


def search(request):
    return render(request, "demo/search.html", {})


def handle(request):
    text = request.POST["搜索内容"]
    service.addText(text)
    db = Shop.objects.all()
    po_list = []
    for i in db:
        if text in i.title:
            po_list.append(i.content)

    return render(request, "demo/resp.html", {"resp":  po_list})
