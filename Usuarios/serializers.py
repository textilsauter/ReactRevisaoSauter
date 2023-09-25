from rest_framework import serializers
from Usuarios.models import Revisao


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Revisao
        fields = '__all__'