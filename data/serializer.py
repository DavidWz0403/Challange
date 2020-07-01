from rest_framework import serializers
from .models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ['inputName', 'inputAnswer1', 'inputAnswer2', 'inputAnswer3',
                  'inputAnswer4', 'inputAnswer5', 'inputAnswer6']