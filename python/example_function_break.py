"""
Example of breaking for loops once a condition has been met
"""

NAMES = ["Andrew", "Ana", "Andrea", "Ariel", "Alex", "Kevin", "Kim-Ashleigh", "Kimmie"]

for name in NAMES:
    if name == "Ariel":
        print("Found " + name + "! Welcome back!")
        break
    print("Currently testing " + name)
    