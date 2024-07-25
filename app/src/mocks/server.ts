import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('http://localhost:8000/api/companies', (req, res, ctx) => {
    // @ts-ignore
    return res(ctx.json([
      {
        company_id: 1,
        name: 'TechNova Solutions',
        address: '123 Innovation Drive, San Francisco, CA 94105'
      },
      {
        company_id: 2,
        name: 'GreenLeaf Enterprises',
        address: '456 Sustainability Ave, Portland, OR 97201'
      }
    ]));
  }),
  rest.get('http://localhost:8000/api/companies/:id/locations', (req, res, ctx) => {
    // @ts-ignore
    return res(ctx.json([
      {
        address: '123 Innovation Drive, San Francisco, CA 94105',
        company_id: 1,
        latitude: 37.7749,
        location_id: 1,
        longitude: -122.4194,
        name: 'TechNova HQ'
      },
      {
        address: '456 Research Park, Palo Alto, CA 94304',
        company_id: 1,
        latitude: 37.4419,
        location_id: 2,
        longitude: -122.143,
        name: 'TechNova R&D Center'
      }
    ]));
  })
);

export { server, rest };
