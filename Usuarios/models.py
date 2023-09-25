from django.db import models


# Create your models here.


class Revisao(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserNumero = models.IntegerField()
    UserRevisao = models.IntegerField()
    UserOperador = models.CharField(max_length=40)
    UserProduto = models.CharField(max_length=20)
    UserMaquina = models.IntegerField()
    UserMetros = models.IntegerField() 
    UserPeso = models.FloatField()
    UserCliente = models.IntegerField()  
    UserNumDefeitos = models.IntegerField()
    UserRefugo = models.FloatField()
    UserLotes = models.CharField(max_length=40)
    UserUrdideira=models.CharField(max_length=40)
    UserData_cadastro = models.DateTimeField(auto_now_add=True, blank=True)
    is_active = models.BooleanField(default=True)

