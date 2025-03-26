export const user = async (req, res) => {
  res.json({ message: "Welcome user" });
};

 export const manager = async (req, res) => {
  res.json({ message: "Welcome Manager" });
};

export const admin = async (req, res) => {
  res.json({ message: "Welcome Admin" });
};
