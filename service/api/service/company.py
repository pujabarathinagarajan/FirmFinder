from api.model.company import companies_df
from api.model.location import locations_df

def fetch_all_companies():
    companies = companies_df.to_dict('records')
    return companies

def fetch_company_by_id(company_id):
    company = companies_df[companies_df['company_id'] == company_id]
    return company.to_dict('records')[0] if not company.empty else None

def fetch_company_locations(company_id):
    locations = locations_df[locations_df['company_id'] == company_id]
    return locations.to_dict('records')
