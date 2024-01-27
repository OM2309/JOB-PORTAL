export const testPostController = (req, res) => {
  const { name, age } = req.body;
  res.status(200).send(`Hello , my name is ${name} and my age is ${age}`);
};
