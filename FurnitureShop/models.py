#Create your models here
from django.db import models
from gdstorage.storage import GoogleDriveStorage
gd_storage = GoogleDriveStorage()


class Product(models.Model):
    product_name = models.CharField(max_length=200)
    img = models.ImageField(upload_to="https://drive.google.com/drive/folders/1e6n7TyhQMMaGNsYE2W0mgd6sJ83p-pJ9?usp=sharing",  storage=gd_storage, blank=True, null=True)
    product_price = models.CharField(max_length=100)

    def __str__(self):
        return self.product_name

