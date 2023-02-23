import type { RequestHandler } from "@sveltejs/kit";
import { QueryTypes, Sequelize } from "sequelize";
import { env } from "$lib/util/env";

// /** @type {import('./$types').PageLoad} */
const sequelize = new Sequelize({
  dialect: "mssql",
  database: env.VITE_DB_NAME,
  host: env.VITE_DB_HOST,
  logging: true,
  dialectOptions: {
    authentication: {
      type: "azure-active-directory-service-principal-secret",
      options: {
        clientId: env.VITE_AZ_CLIENT_ID,
        tenantId: env.VITE_AZ_TENANT_ID,
        clientSecret: env.VITE_AZ_CLIENT_SECRET,
      },
    },
  },
});



export const GET = async () => {
  await sequelize.authenticate();
  const res = await sequelize.query("SELECT * FROM announcements", { type: QueryTypes.SELECT });

  const headers = {
    "Content-Type": "application/json",
  };
  const response = new Response(JSON.stringify(res), {
    status: 200,
    headers: headers,
  });

  return response;
};
