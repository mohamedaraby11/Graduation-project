# Generated by Django 4.0.4 on 2022-04-27 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapi', '0003_alter_doctors_doctorid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctors',
            name='DoctorId',
        ),
        migrations.AddField(
            model_name='doctors',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
