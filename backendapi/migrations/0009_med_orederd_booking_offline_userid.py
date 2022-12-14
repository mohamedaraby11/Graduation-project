# Generated by Django 4.0.4 on 2022-06-27 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapi', '0008_order_medicine'),
    ]

    operations = [
        migrations.CreateModel(
            name='med_orederd',
            fields=[
                ('order_id', models.IntegerField(auto_created=True, primary_key=True, serialize=False)),
                ('cl_name', models.CharField(max_length=500)),
                ('med_cout', models.IntegerField()),
                ('oreder_price', models.IntegerField()),
                ('med_name', models.CharField(max_length=500)),
            ],
        ),
        migrations.AddField(
            model_name='booking_offline',
            name='UserId',
            field=models.IntegerField(default=11),
            preserve_default=False,
        ),
    ]
