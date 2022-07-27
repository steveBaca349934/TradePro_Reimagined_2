from djoser.serializers import UserCreateSerializer as USC
from django.contrib.auth import get_user_model

# get customer user model like this
User = get_user_model()

class UserCreateSerializer(USC):
    class Meta(USC.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
        

