# Generated by Django 4.0 on 2023-09-22 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuarios', '0003_revisao_delete_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='revisao',
            name='UserUrdideira',
            field=models.CharField(default=1, max_length=40),
            preserve_default=False,
        ),
    ]
