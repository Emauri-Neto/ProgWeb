from django.db import models

# Create your models here.
class formAtividade(models.Model):
    name = models.CharField(max_length=25, null=True)
    email = models.EmailField()
    phone = models.CharField(max_length=13)
    adress = models.CharField(max_length=255)
    date = models.DateTimeField()
    def __str__(self):
        return self.name

