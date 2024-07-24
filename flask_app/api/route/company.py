from flask import Blueprint, jsonify
from api.service.company import fetch_all_companies, fetch_company_by_id, fetch_company_locations

company_bp = Blueprint('company', __name__)

@company_bp.route('/api/companies', methods=['GET'])
def get_companies():
    companies = fetch_all_companies()
    return jsonify(companies)

@company_bp.route('/api/companies/<int:company_id>', methods=['GET'])
def get_company(company_id):
    company = fetch_company_by_id(company_id)
    if company:
        return jsonify(company)
    else:
        return jsonify({'error': 'Company not found'}), 404

@company_bp.route('/api/companies/<int:company_id>/locations', methods=['GET'])
def get_company_locations(company_id):
    company = fetch_company_by_id(company_id)
    if company:
        locations = fetch_company_locations(company_id)
        return jsonify(locations)
    else:
        return jsonify({'error': 'Company not found'}), 404
