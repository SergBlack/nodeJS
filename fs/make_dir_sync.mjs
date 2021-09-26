import fs from "fs";

try {
  fs.mkdirSync("./parent/new_dir"); // failed
} catch (err) {
  console.error("Failed because directory parent doesn't exists");
}

fs.mkdirSync("./parent/new_dir", { recursive: true }); // success
