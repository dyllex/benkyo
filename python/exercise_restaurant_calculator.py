meal = 60.50
tax = 0.0075
tip = 0.15

meal += meal * tax
total = meal + meal * tip

print("%.2f" % total)