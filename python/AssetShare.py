"""
Flexible database for shared assets
"""

ASSETS = []

def get_assets_titlecase():
    """Get asset name and capitalize first letter"""
    assets_titlecase = []
    for asset in ASSETS:
        assets_titlecase = asset["name"].title()
    return assets_titlecase

def print_assets_titlecase():
    """Print asset name"""
    assets_titlecase = get_assets_titlecase()
    print(assets_titlecase)

def add_asset(name, asset_type="prop"):
    """Add assets to asset dictionary list"""
    asset = {"name": name, "asset_type": asset_type}
    ASSETS.append(asset)

def save_file(asset):
    try:
        f = open("assets.txt", "a")
        f.write(asset + "\n")
        f.close()
    except Exception:
        print("Could not save file")

def read_file():
    try:
        f = open("assets.txt", "r")
        for asset in f.readlines():
            add_asset(asset)
        f.close()
    except Exception:
        print ("Could not read file")


read_file()
print_assets_titlecase()

asset_name = input("Enter asset name: ")
asset_type = input("Enter asset type: ")

add_asset(asset_name, asset_type)
save_file(asset_name)
