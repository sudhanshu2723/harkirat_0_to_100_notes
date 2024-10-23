"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = void 0;
const zod_1 = require("zod");
exports.signUpSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string().email()
});
// commands
// npm login
// keep the name of package.json=@sudhanshupandey/${anything}
// make the main as  "main": "dist/index.js",
// run the command npm publish --access=public
// to publish it again change the version and write npm publish
// TO USE THE FILE
// make the "declaration":true in the package.json file
// now run the command tsc
// this will create a file named index.d.ts in the dist folder
// index.d.ts contains the declaration of the type and nothing else
// now change the version in package.json
// run npm publish
// now change the version of @sudhanshupandey/common to the new version
// remove the node_modules using rm -r node_modules
// run npm i
// now new version of node modules will be installed which typescript can also use
