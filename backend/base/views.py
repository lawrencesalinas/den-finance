from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .expenses import expenses

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
    return Response(expenses)


@api_view(['GET'])
def getExpense(request, pk):
    expense = None
    for i in expenses:
        print(i, 'i')
        if i['id'] == pk:
            expense = i
            break
    return Response(expense)


@api_view(['POST'])
def addExpenses(request):
    user = request.user
