# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Short project name
NAME = "rtc-graphic-novels"

# Descriptive title of project
TITLE = "Graphic Novels"

# Google spreadsheet key
SPREADSHEET_KEY = "100sslz9219WdKg74DXztBedlf3VV_v5koVSxqTLtyBo"

# Exclude these files from publication
EXCLUDES = ["*.md", "requirements.txt"]

# Create JSON data at ./data.json, disabled by default
# CREATE_JSON = True

# S3 bucket configuration
S3_BUCKETS = {
    # Provide target -> s3 url pairs, such as:
    #     "mytarget": "mys3url.bucket.url/some/path"
    # then use tarbell publish mytarget to publish to it
    "production": "graphics.chicagotribune.com/rtc-graphic-novels",
    "staging": "graphics.beta.tribapps.com/rtc-graphic-novels",
}

# Default template variables
DEFAULT_CONTEXT = {
    'name': 'rtc-graphic-novels',
    'title': 'Graphic Novels'
}