from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .expenses import expenses
from .models import Transaction
from .serializers import TransactionSerializer

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/expenses/',
        '/api/expenses/add/',
        '/api/expenses/delete/'
        '/api/income/add/',
    ]
    return Response(routes)


@api_view(['GET'])
def getExpenses(request):
    transactions = Transaction.objects.all()
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createTransaction(request):
    print(request.data, 'requdfshsdkjhdlskfhlhjuest')
    data = request.data
    transaction = Transaction.objects.create(
        name=data['name'],
        category=data['category'],
        date=data['date'],
        amount=data['amount'],
        type=data['type']
    )

    serializer = TransactionSerializer(transaction, many=False)
    return Response(serializer.data)


@ api_view(['GET'])
def getExpense(request, pk):
    transactions = Transaction.objects.all()
    transaction = None
    for i in transactions:
        print(i, 'i')
        if i['id'] == pk:
            expense = i
            break
    return Response(expense)


@ api_view(['POST'])
def addExpenses(request):
    user = request.user
