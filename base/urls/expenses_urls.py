from django.urls import path
from base.views import expenses_views as views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    path('', views.getExpenses, name="expenses"),
    # path('expenses/<str:pk>', views.getExpense, name="expense"),
    path('create/', views.createTransaction, name='transaction-create'),
    path('delete/<str:pk>', views.deleteTransaction, name='transaction-delete')
]
 