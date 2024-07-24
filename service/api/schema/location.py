from marshmallow import Schema, fields

class LocationSchema(Schema):
    location_id = fields.Int(required=True)
    company_id = fields.Int(required=True)
    name = fields.Str(required=True)
    address = fields.Str(required=True)
    latitude = fields.Float(required=True)
    longitude = fields.Float(required=True)
