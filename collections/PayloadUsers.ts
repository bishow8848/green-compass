import type { CollectionConfig } from "payload";

export const PayloadUsers: CollectionConfig = {
  slug: "payload-users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Administration",
  },
  access: {
    admin: ({ req }) => req.user?.role === "admin",
    read: ({ req }) => req.user?.role === "admin",
    create: ({ req }) => req.user?.role === "admin",
    update: ({ req }) => req.user?.role === "admin",
    delete: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    { name: "name", type: "text" },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "admin",
      saveToJWT: true,
      options: [{ label: "Administrator", value: "admin" }],
    },
  ],
};
