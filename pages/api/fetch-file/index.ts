import fs from "fs";

const handler = async (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    try {
      const html = fs.readFileSync("./files/email.html").toString();

      return res.status(200).json({ msg: "Success!!!", data: html });
    } catch (err) {
      return res.status(500).json({ msg: "Fail!!!", error: err });
    }
  }
};

export default handler;
