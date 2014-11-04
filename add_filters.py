# Add some filters
from flask import Blueprint
blueprint = Blueprint('noble-charter-discipline', __name__)
import locale
locale.setlocale(locale.LC_ALL, 'en_US')

@blueprint.app_template_filter('roundme')
def roundme(text):
   text=int(text)
   return text

   
@blueprint.app_template_filter('add_suffix')
def add_suffix(text):
  text = str(text)
  if text.endswith("1"):
    text = text + "st"
  elif text.endswith("2"):
    text = text + "nd"
  elif text.endswith("3"): 
    text = text + "rd"
  else:
    text = text + "th"
  return text 