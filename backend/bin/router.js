/* eslint-disable no-console */

const Router = require("router");
const { glob } = require("glob");
const path = require("path");

module.exports = async (app) => {
  const router = Router();
  console.info("Creating routes...");
  router.get('/', async ctx => {
    ctx.body = {
      name: 'buildFolio' || process.env.APP_NAME,
      ip: ctx.request.ip
    }
  })
  const routeFiles = path.posix.join(__dirname, "../controllers/**/routes.js");

  try {
    const files = await glob(routeFiles);

    if (files.length === 0) {
      console.warn("No route files found.");
      return;
    }

    files.forEach((file) => {
      console.info(`Adding routes from: ${file}`);

      try {
        const routes = require('../'+file);

        if (routes instanceof Router) {
          router.use(routes);
        } else {
          console.warn(`File ${file} does not export a valid Router instance.`);
        }
      } catch (error) {
        console.error(`Error loading routes from ${file}: ${error.message}`);
      }
    });

    app.use(router);
    console.info("Routes successfully created and added to the app.");
  } catch (error) {
    console.error(`Error while creating routes: ${error.message}`);
  }
};
