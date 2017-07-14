"""
Example of using exceptions
"""

STUDENT = {
    "name": "Mark",
    "student_id": 15163,
    "feedback": None
}

STUDENT["LAST_NAME"] = "Kowalski"

try:
    LAST_NAME = STUDENT["last_name"]
except KeyError:
    print("Error finding LAST_NAME")
except TypeError as error:
    print("I can't add these two together")
    print(error)

print("This code executes")
