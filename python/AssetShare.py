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

def add_asset(name, asset_type):
    """Add assets to asset dictionary list"""
    asset = {"name": name, "asset_type": asset_type}
    ASSETS.append(asset)

asset_list = get_assets_titlecase()

asset_name = input("Enter asset name: ")
asset_type = input("Enter asset type: ")

add_asset(asset_name, asset_type)
print_assets_titlecase()