import fs from "fs";
import path from "path";

const handler = async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    try {
      const file = path.join(process.cwd(), "files", "email.html");
      const html = fs.readFileSync(file).toString();

      return res.status(200).json({ msg: "Success!!!", data: html });
    } catch (err) {
      return res.status(500).json({ msg: "Fail!!!", error: err });
    }
  }
};

export default handler;
