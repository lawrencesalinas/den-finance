from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from base.expenses import expenses
from base.models import Transaction
from base.serializers import TransactionSerializer
from rest_framework.permissions import IsAuthenticated
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
@permission_classes([IsAuthenticated])
def getExpenses(request):
    user = request.user
    print('jelo')
    transactions = Transaction.objects.filter(user=user)
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createTransaction(request):
    print('Iam here')
    user = request.user
    data = request.data
    transaction = Transaction.objects.create(
        user=user,
        name=data['name'],
        category=data['category'],
        date=data['date'],
        amount=data['amount'],
        type=data['type']
    )

    serializer = TransactionSerializer(transaction, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTransaction(request, pk):
    transaction = Transaction.objects.get(id=pk)
    transaction.delete()
    return Response('Transaction was deleted')

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
