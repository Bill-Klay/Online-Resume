from django.db import models

class HomePage(models.Model):
    image = models.ImageField(upload_to='images/')
    summary = models.CharField(max_length=200)
    title = models.CharField(max_length=100, default='Project')
    link = models.CharField(max_length=50, null=True)
    complete = models.TextField(default=summary)