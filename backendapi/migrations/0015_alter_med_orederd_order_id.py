# Generated by Django 4.0.5 on 2022-07-04 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapi', '0014_rename_med_id_med_orederd_drug_category_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='med_orederd',
            name='order_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
