from django.db import models

class Data(models.Model):
    inputName = models.CharField(max_length=36, blank=False)
    inputAnswer1 = models.CharField(max_length=36, blank=True, default="")
    inputAnswer2 = models.CharField(max_length=36, blank=True, default="")
    inputAnswer3 = models.CharField(max_length=36, blank=True, default="")
    inputAnswer4 = models.CharField(max_length=36, blank=True, default="")
    inputAnswer5 = models.CharField(max_length=36, blank=True, default="")
    inputAnswer6 = models.CharField(max_length=36, blank=True, default="")
