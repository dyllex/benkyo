"""
Example of continuing for loops once a condition has been met
"""

NAMES = ["Andrew", "Ana", "Andrea", "Ariel", "Alex", "Kevin", "Kim-Ashleigh", "Kimmie"]

for name in NAMES:
    if name == "Ariel":
        continue
        print("Found " + name + "! Welcome back!")
    print("Currently testing " + name)
    