# Generated by Django 4.0.5 on 2022-07-04 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapi', '0011_remove_med_orederd_cl_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='med_orederd',
            name='cl_Id',
            field=models.CharField(default=2, max_length=500),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='med_orederd',
            name='med_Id',
            field=models.CharField(default=2, max_length=500),
            preserve_default=False,
        ),
    ]
