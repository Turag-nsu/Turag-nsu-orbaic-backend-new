const ensureBearerToken = require('../src/middlewares/EnsureBearerToken');

test('should pass if a valid Bearer token is provided', () => {
  const req = { headers: { authorization: 'Bearer validToken' } };
  const res = {};
  const next = jest.fn();

  ensureBearerToken(req, res, next);

  expect(next).toHaveBeenCalled();
  expect(req.user).toBeDefined(); // Assuming `req.user` is set with decoded token data
});

test('should fail if no token is provided', () => {
  const req = { headers: {} };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const next = jest.fn();

  ensureBearerToken(req, res, next);

  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized: No token provided' });
});
