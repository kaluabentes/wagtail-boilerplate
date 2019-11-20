# Wagtail Boilerplate

A starter point for Wagtail based applications

## Requirements

- Python v3.8.0
- Node v12.13.0
- Yarn v1.19.1

## Setup

- Activate your env with your favorite env manager, then
- Run `$ pip install -r requirements.txt`
- Run `$ python src/manage.py migrate`
- Run `$ python src/manage.py runserver`
- Run `$ python src/manage.py createsuperuser` to create a user to login into admin panel
- To compile the assets, run `cd src/assets && yarn && yarn dev`
- Assets for production, run `yarn build` inside `assets` folder and then
- Run `python src/manage.py collectstatic` in the root of the project
- Open `http://127.0.0.1:8000/`
- Open `http://127.0.0.1:8000/cms` to access the cms admin panel
