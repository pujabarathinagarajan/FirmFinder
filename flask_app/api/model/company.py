from pydantic import BaseModel

class Company(BaseModel):
    company_id: int
    name: str
    address: str
    latitude: float
    longitude: float


# Load data
import pandas as pd

companies_df = pd.read_csv('data/companies.csv')
