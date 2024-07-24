from flask import Blueprint, jsonify
from flasgger import swag_from
from api.service.company import fetch_all_companies, fetch_company_by_id, fetch_company_locations

company_bp = Blueprint('company', __name__)

@company_bp.route('/api/companies', methods=['GET'])
@swag_from({
    'responses': {
        200: {
            'description': 'List of all companies',
            'examples': {
                'application/json': [
                    {
                        "company_id": 1,
                        "name": "TechNova Solutions",
                        "address": "123 Innovation Drive, San Francisco, CA 94105",
                        "latitude": 37.7749,
                        "longitude": -122.4194
                    },
                    {
                        "company_id": 2,
                        "name": "GreenLeaf Enterprises",
                        "address": "456 Sustainability Ave, Portland, OR 97201",
                        "latitude": 45.5155,
                        "longitude": -122.6789
                    }
                ]
            }
        }
    }
})
def get_companies():
    companies = fetch_all_companies()
    return jsonify(companies)

@company_bp.route('/api/companies/<int:company_id>', methods=['GET'])
@swag_from({
    'parameters': [
        {
            'name': 'company_id',
            'in': 'path',
            'type': 'integer',
            'required': True,
            'description': 'ID of the company to retrieve'
        }
    ],
    'responses': {
        200: {
            'description': 'Details of a specific company',
            'examples': {
                'application/json': {
                    "company_id": 1,
                    "name": "TechNova Solutions",
                    "address": "123 Innovation Drive, San Francisco, CA 94105",
                    "latitude": 37.7749,
                    "longitude": -122.4194
                }
            }
        },
        404: {
            'description': 'Company not found',
            'examples': {
                'application/json': {
                    'error': 'Company not found'
                }
            }
        }
    }
})
def get_company(company_id):
    company = fetch_company_by_id(company_id)
    if company:
        return jsonify(company)
    else:
        return jsonify({'error': 'Company not found'}), 404

@company_bp.route('/api/companies/<int:company_id>/locations', methods=['GET'])
@swag_from({
    'parameters': [
        {
            'name': 'company_id',
            'in': 'path',
            'type': 'integer',
            'required': True,
            'description': 'ID of the company to retrieve locations for'
        }
    ],
    'responses': {
        200: {
            'description': 'List of locations for a specific company',
            'examples': {
                'application/json': [
                    {
                        "location_id": 1,
                        "company_id": 1,
                        "name": "TechNova HQ",
                        "address": "123 Innovation Drive, San Francisco, CA 94105",
                        "latitude": 37.7749,
                        "longitude": -122.4194
                    },
                    {
                        "location_id": 2,
                        "company_id": 1,
                        "name": "TechNova R&D Center",
                        "address": "456 Research Park, Palo Alto, CA 94304",
                        "latitude": 37.4419,
                        "longitude": -122.1430
                    }
                ]
            }
        },
        404: {
            'description': 'Company not found',
            'examples': {
                'application/json': {
                    'error': 'Company not found'
                }
            }
        }
    }
})
def get_company_locations(company_id):
    company = fetch_company_by_id(company_id)
    if company:
        locations = fetch_company_locations(company_id)
        return jsonify(locations)
    else:
        return jsonify({'error': 'Company not found'}), 404
