# Generated by Django 3.0.7 on 2020-06-30 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=36)),
                ('inputAnswer1', models.CharField(default='', max_length=36)),
                ('inputAnswer2', models.CharField(default='', max_length=36)),
                ('inputAnswer3', models.CharField(default='', max_length=36)),
                ('inputAnswer4', models.CharField(default='', max_length=36)),
                ('inputAnswer5', models.CharField(default='', max_length=36)),
                ('inputAnswer6', models.CharField(default='', max_length=36)),
            ],
        ),
    ]
