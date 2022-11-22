export default function notFound(req, res) {
  return res.status(404).json({ error: `The route ${req.method} ${req.url} does not exist!` });
}
