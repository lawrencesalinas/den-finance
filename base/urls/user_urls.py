from django.urls import path
from base.views import user_views as views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('users/', views.getUsers, name='users'),
    path('register/', views.registerUser, name='register'),
    # path('', views.getRoutes, name="routes"),
    # path('expenses/', views.getExpenses, name="expenses"),
    # path('expenses/<str:pk>', views.getExpense, name="expense"),
    # path('create/', views.createTransaction, name='transaction-create')
]
  