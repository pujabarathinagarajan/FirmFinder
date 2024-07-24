import unittest
from app import app

class CompanyRouteTestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_get_companies(self):
        response = self.app.get('/api/companies')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(len(response.json) > 0)

    def test_get_company(self):
        response = self.app.get('/api/companies/1')
        self.assertEqual(response.status_code, 200)
        self.assertIn('company_id', response.json)

    def test_get_company_not_found(self):
        response = self.app.get('/api/companies/999')
        self.assertEqual(response.status_code, 404)
        self.assertIn('error', response.json)

    def test_get_company_locations(self):
        response = self.app.get('/api/companies/1/locations')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(len(response.json) > 0)

    def test_get_company_locations_not_found(self):
        response = self.app.get('/api/companies/999/locations')
        self.assertEqual(response.status_code, 404)
        self.assertIn('error', response.json)

if __name__ == '__main__':
    unittest.main()
