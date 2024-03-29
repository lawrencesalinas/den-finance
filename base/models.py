from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.timezone import now
# Create your models here.
class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField('default')
    name = models.CharField(max_length=200, null=True, blank=True)
    amount = models.DecimalField(
    max_digits=10, decimal_places=2, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
